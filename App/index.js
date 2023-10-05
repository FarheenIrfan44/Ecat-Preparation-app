import React, { useState } from 'react';

import Layout from '../Layout';
import Loader from '../Loader';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import { shuffle } from '../../utils';
import HomePage from '../HomePage';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [app1, setApp1] = useState(true);

  const startQuiz = (data, countdownTime) => {
    setApp1(false);
    setLoading(true);
    setCountdownTime(countdownTime);
    setData(data);
    setIsQuizStarted(true);
    setLoading(false);
  };

  const endQuiz = resultData => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  const replayQuiz = () => {
    setLoading(true);

    const shuffledData = shuffle(data);
    shuffledData.forEach(element => {
      element.options = shuffle(element.options);
    });

    setData(shuffledData);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setData(null);
    setCountdownTime(null);
    setIsQuizStarted(false);
    setIsQuizCompleted(false);
    setResultData(null);
    setApp1(true);
    setLoading(false);
  };

  return (
    <Layout app1>
      {loading && <Loader />}
      {!loading && app1 && !isQuizStarted && !isQuizCompleted && (
        <HomePage startQuiz={startQuiz} />
      )}
      {/* {!loading && !isQuizStarted && !isQuizCompleted && !app1 && (
        <Main startQuiz={startQuiz} />
      )} */}
      {!loading && isQuizStarted && !app1 && (
        <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
      {!loading && isQuizCompleted && !app1 && (
        <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
      )}
    </Layout>
  );
};

export default App;
