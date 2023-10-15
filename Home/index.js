import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Navbar from '../Navbar'
import EntrytestBox from '../EntryTestBox'
import SubjectTestBox from '../SubjectTestBox'
import {
    CATEGORIES,
    NUM_OF_QUESTIONS,
    COUNTDOWN_TIME,
} from '../../constants'
import { shuffle } from '../../utils';
import Offline from '../Offline';

const Home = ({ startQuiz }) => {
    const [category, setCategory] = useState('0');
    const [numOfQuestions, setNumOfQuestions] = useState(5);
    const [countdownTime, setCountdownTime] = useState({
        hours: 0,
        minutes: 120,
        seconds: 0,
    });
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [offline, setOffline] = useState(false);

    const handleTimeChange = (e, { name, value }) => {
        setCountdownTime({ ...countdownTime, [name]: value });
    };
    let allFieldsSelected = true;

    const fetchData = async (fatchDataCategory) => {
        setProcessing(true);
        try {
            if (error) setError(null);

            const response = await fetch('http://localhost:5000/fetchData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fatchDataCategory: fatchDataCategory
                })
            });
            const results = await response.json();

            results.forEach(element => {
                element.options = shuffle([
                    element.correct_answer,
                    ...element.incorrect_answers,
                ]);
            });

            setProcessing(false);
            startQuiz(
                results,
                countdownTime.hours + countdownTime.minutes + countdownTime.seconds
            );
        } catch (error) {
            setTimeout(() => {
                if (!navigator.onLine) {
                    setOffline(true);
                } else {
                    setProcessing(false);
                    setError(error);
                }
            }, 1000);
        }
    };


    if (offline) return <Offline />;



    return (
        <React.Fragment>
            <>

                {/* Navbar Start */}
                <Navbar />
                {/* Navbar End */}
                {/* Hero section Start */}
                <div className='hero-section'>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                                <h5 className='text-primary text-uppercase mb-3 animated slideInDown'>Free Entry test Preparation platform</h5>
                                <h1 className="display-3 text-white animated slideInDown">Ace Your Entry Test with <span className="text-primary"> ETPx.</span></h1>
                                <p className="fs-5 text-white mb-4 pb-2">Unlock Your Potential and Elevate Your Entry Test Preparation with Rigorous Conceptual MCQs! Get Ahead of the Competition and Secure Your Dream University Spot!</p>
                                <a href="https://mcqs-tests.vercel.app/" className="btn btn-primary py-3 px-4 me-3">Get Started</a>
                                <a href="#about" className="btn btn-outline-primary py-3 px-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Section End */}
                {/* Service Start */}
                <div className="container-xxl py-5 my-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInRight" data-wow-delay="0.1s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-globe text-primary mb-4" />
                                        <h5 className="mb-3">Mock Tests</h5>
                                        <p>
                                            Whether you're aiming for ECAT, MDCAT, NET or any other major
                                            university entry test, we've got you covered. Our platform
                                            offers tailored mock tests.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-chart-pie text-primary mb-4" />
                                        <h5 className="mb-3">Real-Time Performance Analysis</h5>
                                        <p>
                                            Track your progress with our detailed performance analysis.
                                            Identify your strengths and weaknesses in each subject.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-home text-primary mb-4" />
                                        <h5 className="mb-3">Expert Guidance and Support</h5>
                                        <p>
                                            Our team of experienced educators is dedicated to your success.
                                            Benefit from their valuable tips, study strategies, and
                                            guidance.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-book-open text-primary mb-4" />
                                        <h5 className="mb-3">Challenging Conceptual MCQs</h5>
                                        <p>
                                            Experience a comprehensive question bank designed to enhance
                                            your understanding and critical thinking. Stay ahead of the
                                            competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* About Start */}
                <div className="container-xxl py-5" id='about'>
                    <div className="container">
                        <div className="row g-5">
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                                style={{ minHeight: 400 }}
                            >
                                <div className="position-relative h-100">
                                    <img
                                        className="img-fluid position-absolute w-100 h-100"
                                        src="assets/img/about.jpg"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                {/* <h6 className="section-title bg-white text-start text-primary pe-3">
                                    About Us
                                </h6> */}
                                <h1 className="mb-4">Welcome to ETPx.</h1>
                                <p className="mb-4">
                                    Welcome to ETPx, your ultimate destination for entry test
                                    preparation. We understand that getting into your dream university
                                    is a crucial step in achieving your academic goals and future
                                    success. That's why we are here to support you every step of the
                                    way. With our comprehensive and challenging conceptual MCQ-based
                                    tests, you'll be fully prepared to tackle the toughest entry tests
                                    of major Pakistani universities.
                                </p>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            Skilled Instructors
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            Online Classes
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            International Certificate
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            Skilled Instructors
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            Online Classes
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0">
                                            <i className="fa fa-arrow-right text-primary me-2" />
                                            International Certificate
                                        </p>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}


                {/* Subjects Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">
                                Subject Tests
                            </h6>
                            <h1 className="mb-5">Subject-wise preparation for Universities Entry Tests</h1>
                        </div>
                        <SubjectTestBox fetchData={fetchData} />
                    </div>
                </div>
                {/* Subjects End */}

                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">
                                Mock Tests
                            </h6>
                            <h1 className="mb-5">Universities Mock Entry Tests</h1>
                        </div>
                        <EntrytestBox fetchData={fetchData} />
                    </div>
                </div>
                {/* Team End */}

                {/* Footer Start */}
                <div
                    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-3">Quick Link</h4>
                                <a className="btn btn-link" href="">
                                    About Us
                                </a>
                                <a className="btn btn-link" href="">
                                    Contact Us
                                </a>
                                <a className="btn btn-link" href="">
                                    Privacy Policy
                                </a>
                                <a className="btn btn-link" href="">
                                    Terms &amp; Condition
                                </a>
                                <a className="btn btn-link" href="">
                                    FAQs &amp; Help
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-3">Contact</h4>
                                <p className="mb-2">
                                    <i className="fa fa-map-marker-alt me-3" />
                                    123 Street, New York, USA
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-phone-alt me-3" />
                                    +012 345 67890
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-envelope me-3" />
                                    info@example.com
                                </p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-youtube" />
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-3">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                    <input
                                        className="form-control border-0 w-100 py-3 ps-4 pe-5"
                                        type="text"
                                        placeholder="Your email"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                    >
                                        SignUp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    ©{" "}
                                    <a className="border-bottom" href="#">
                                        ETPx.
                                    </a>
                                    , All Right Reserved.
                                    {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                    Designed By{" "}
                                    <a className="border-bottom" href="https://htmlcodex.com">
                                        HTML Codex
                                    </a>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="">Home</a>
                                        <a href="">Cookies</a>
                                        <a href="">Help</a>
                                        <a href="">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
                {/* JavaScript Libraries */}
                {/* Template Javascript */}
            </>

        </React.Fragment>
    )
}

// Home.PropTypes = {
//     startQuiz: PropTypes.func.isRequired
// }

export default Home