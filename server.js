// Node express MySql server for react app
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MySql database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

// if error connecting to database
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySql Connected...');
    }
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend's URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


function convertDataFormat(fetchedData) {
    const result = [];
    const questionMap = new Map();

    fetchedData.forEach((row) => {
        const {
            question_id,
            question,
            choice_id,
            choice,
            is_right_choice
        } = row;

        if (!questionMap.has(question_id)) {
            if (is_right_choice === '1') {
                questionMap.set(question_id, {
                    question,
                    correct_answer: choice,
                    incorrect_answers: [],
                });
            }
            else {
                questionMap.set(question_id, {
                    question,
                    correct_answer: null,
                    incorrect_answers: [choice],
                });
            }
        }
        else if (questionMap.has(question_id) && is_right_choice === '0') {
            questionMap.get(question_id).incorrect_answers.push(choice);
        }
        else if (questionMap.has(question_id) && is_right_choice === '1') {
            questionMap.get(question_id).correct_answer = choice;
        }
    });

    questionMap.forEach((value) => {
        const options = value.incorrect_answers.slice();
        options.push(value.correct_answer);
        value.options = options;
        result.push({
            question: value.question,
            correct_answer: value.correct_answer,
            incorrect_answers: value.incorrect_answers,
            options: options,
        });
    });

    return result;
}


app.post('/fetchData', (req, res) => {
    const fetchDataCategory = req.body.fatchDataCategory;

    if (fetchDataCategory === 'English') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'English'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Mathematics') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Math'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Chemistry') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Chemistry'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Physics') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Physics'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Biology') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Biology'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Computer') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Computer'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'Logical Reasoning') {
        // Get data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where subject = 'Logical Reasoning'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const convertedData = convertDataFormat(result);
                res.json(convertedData);
            }
        });
    }
    else if (fetchDataCategory === 'ECAT Punjab') {
        // Get English data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where q.subject = 'English'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const englishData = convertDataFormat(result);

                // Get Math data from database
                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Math'`, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const mathData = convertDataFormat(result);

                        // Get Chemistry data from database
                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Chemistry'`, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                const chemistryData = convertDataFormat(result);

                                // Get Physics data from database
                                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Physics'`, (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        const physicsData = convertDataFormat(result);

                                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Computer'`, (err, result) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                const computerData = convertDataFormat(result);

                                                // Get Logical Reasoning data from database
                                                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Logical Reasoning'`, (err, result) => {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        const logicalReasoningData = convertDataFormat(result);

                                                        const resultData = [...englishData, ...mathData, ...chemistryData, ...physicsData, ...computerData, ...logicalReasoningData];

                                                        res.json(resultData);
                                                    }
                                                });
                                            }
                                        });

                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    else if (fetchDataCategory === 'National MDCAT') {
        // Get Biology data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where q.subject = 'Biology'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const biologyData = convertDataFormat(result);
                // Chemistry
                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Chemistry'`, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const chemistryData = convertDataFormat(result);

                        // Get Physics data from database
                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Physics'`, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                const physicsData = convertDataFormat(result);
                                // English
                                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'English'`, (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        const englishData = convertDataFormat(result);

                                        // Get Logical Reasoning data from database
                                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Logical Reasoning'`, (err, result) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                const logicalReasoningData = convertDataFormat(result);

                                                const resultData = [...biologyData, ...englishData, ...chemistryData, ...physicsData, ...logicalReasoningData];

                                                res.json(resultData);
                                            }
                                        });
                                    }
                                });

                            }
                        });
                    }
                });
            }
        });
    }
    else {
        // Get Biology data from database
        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on  q.question_id = qc.question_id where q.subject = 'Biology'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const biologyData = convertDataFormat(result);
                // Chemistry
                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Chemistry'`, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const chemistryData = convertDataFormat(result);

                        // Get Physics data from database
                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Physics'`, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                const physicsData = convertDataFormat(result);
                                // English
                                db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'English'`, (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        const englishData = convertDataFormat(result);

                                        // Get Logical Reasoning data from database
                                        db.query(`select distinct q.question_id , q.question, qc.choice_id, qc.choice, qc.is_right_choice from questions as q inner join question_choices as qc on q.question_id = qc.question_id where q.subject = 'Logical Reasoning'`, (err, result) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                const logicalReasoningData = convertDataFormat(result);

                                                const resultData = [...biologyData, ...englishData, ...chemistryData, ...physicsData, ...logicalReasoningData];

                                                res.json(resultData);
                                            }
                                        });
                                    }
                                });

                            }
                        });
                    }
                });
            }
        });
    }
});

// Get request to root path
app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});







