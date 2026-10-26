import { useEffect, useState } from "react";

import type { SanitizedQuestion } from "../../types";
import { domPurify } from "../../utils";

interface Props {
  questions: SanitizedQuestion[];
  currentQuestion: number;
  readyForNext: boolean;
  buttonLocked: boolean;
  handleNext: (selectedAnswer: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard = ({
  questions,
  currentQuestion,
  readyForNext,
  buttonLocked,
  handleNext,
}: Props) => {
  const [answers, setAnswers] = useState<string[] | []>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const parsedQuestion = domPurify.sanitize(questions[currentQuestion].question);

  const isLastQuestion = currentQuestion === questions.length - 1;

  useEffect(() => {
    setAnswers(questions[currentQuestion].answers);

    return () => {
      setAnswers([]);
      setSelectedAnswer("");
    };
  }, [currentQuestion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <div className="px-3">
      <div id="radio-group-label" className="mb-4 px-3 text-balance">
        <span className="mr-2 text-lg font-bold text-purple-600">#{currentQuestion + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: parsedQuestion }} />
      </div>
      <div
        className="mb-4 grid gap-6 px-3 md:grid-cols-2"
        role="radiogroup"
        aria-labelledby="radio-group-label">
        {answers.map((answer, i) => (
          <div
            key={answer}
            role="radio"
            aria-checked={false}
            className={`flex cursor-pointer items-center rounded border border-gray-200 pl-4 dark:border-gray-700 ${
              selectedAnswer === answer ? "border-transparent bg-gray-700 accent-purple-600" : ""
            } ${readyForNext && questions[currentQuestion].correctAnswer === i ? "bg-green-800 accent-green-400" : ""} ${
              readyForNext &&
              questions[currentQuestion].correctAnswer !== i &&
              selectedAnswer === answer
                ? "bg-red-800 accent-red-400"
                : ""
            }`}>
            <input
              id={answer}
              type="radio"
              value={answer}
              checked={selectedAnswer === answer}
              disabled={buttonLocked && selectedAnswer !== answer}
              onChange={handleChange}
              className="h-4 w-4 cursor-pointer outline-none"
            />
            <label
              htmlFor={answer}
              className="ml-2 w-full cursor-pointer py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: domPurify.sanitize(answer) }}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full items-end justify-between gap-6 px-3">
        <button
          type="button"
          disabled={!selectedAnswer || buttonLocked}
          className="ml-auto rounded-lg bg-purple-700 px-5 py-2.5 font-bold tracking-wider text-white focus:ring-4 focus:outline-none enabled:cursor-pointer enabled:hover:bg-purple-800 enabled:focus:ring-purple-300 disabled:opacity-60 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900"
          onClick={(e) => handleNext(selectedAnswer, e)}>
          {isLastQuestion ? "FINISH" : "NEXT"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
