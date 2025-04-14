import { useState } from "react";

import type { SanitizedQuestion } from "../../types";
import { getLabelByValue, sanitizeQuizData } from "../../utils";
import Form from "./Form";
import QuestionCard from "./QuestionCard";
import Score from "./Score";

const initialOptions = {
  category: "",
  difficulty: "",
  amount: "10",
};

const QuizWrapper = () => {
  const [quizOptions, setQuizOptions] = useState(initialOptions);
  const [questions, setQuestions] = useState<SanitizedQuestion[] | []>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [readyForNext, setReadyForNext] = useState(false);
  const [buttonLocked, setButtonLocked] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    setQuizOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const apiUrl = `https://opentdb.com/api.php?amount=${quizOptions.amount}&type=multiple&category=${quizOptions.category}&difficulty=${quizOptions.difficulty}`;

      const res = await fetch(apiUrl);
      const data = await res.json();

      if (!data?.results || data?.results?.length < 1) {
        setIsError(true);

        setTimeout(() => {
          setQuizOptions(initialOptions);
          setIsError(false);
        }, 5000);

        return;
      }

      setQuestions(sanitizeQuizData(data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = (selectedAnswer: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonLocked) return;
    setButtonLocked(true);
    setReadyForNext(true);

    const updatedQuestions = [...questions];

    updatedQuestions[currentQuestion].selectedAnswer = updatedQuestions[currentQuestion].answers.indexOf(selectedAnswer);

    if (selectedAnswer === questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]) {
      setScore((prev) => prev + 1);
      updatedQuestions[currentQuestion].isCorrect = true;
    } else {
      updatedQuestions[currentQuestion].isCorrect = false;
    }

    setQuestions(updatedQuestions);

    if (currentQuestion === questions.length - 1) {
      setIsQuizOver(true);
      return;
    }

    setTimeout(() => {
      setReadyForNext(false);
      setCurrentQuestion((prev) => prev + 1);
      setButtonLocked(false);
    }, 1000);
  };

  const handleRetry = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestion(0);
    setScore(0);
    setReadyForNext(false);
    setButtonLocked(false);
    setIsQuizOver(false);
  };

  const handleNewQuiz = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuizOptions(initialOptions);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setReadyForNext(false);
    setButtonLocked(false);
    setIsQuizOver(false);
    setIsError(false);
  };

  return (
    <>
      <main className="grid place-items-center min-h-screen py-16 sm:py-10" style={{ minHeight: "100dvh" }}>
        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-bold mb-8 text-center underline-offset-4 underline decoration-purple-600">Quiz App</h1>
          {!questions.length && <Form handleChange={handleChange} handleSubmit={handleSubmit} />}
          {questions.length > 0 && !isQuizOver && (
            <QuestionCard questions={questions} currentQuestion={currentQuestion} readyForNext={readyForNext} buttonLocked={buttonLocked} handleNext={handleNext} />
          )}
          {isQuizOver && <Score questions={questions} score={score} handleRetry={handleRetry} handleNewQuiz={handleNewQuiz} />}
          {isError && (
            <div className="text-center px-2 text-balance max-w-xs mx-auto">
              <span className="text-red-600">There are no </span>
              {quizOptions?.difficulty && <span className="text-black dark:text-white capitalize">{quizOptions.difficulty} </span>}
              {quizOptions?.category && <span className="text-black dark:text-white">{getLabelByValue(quizOptions.category)} </span>}
              <span className="text-red-600">quizzes yet! Please try another configuration.</span>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default QuizWrapper;
