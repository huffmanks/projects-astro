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

const QuestionCard = ({ questions, currentQuestion, readyForNext, buttonLocked, handleNext }: Props) => {
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
      <div id="radio-group-label" className="text-balance px-3 mb-4">
        <span className="text-purple-600 text-lg font-bold mr-2">#{currentQuestion + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: parsedQuestion }} />
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-4 px-3" role="radiogroup" aria-labelledby="radio-group-label">
        {answers.map((answer, i) => (
          <div
            key={answer}
            role="radio"
            aria-checked={false}
            className={`flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 cursor-pointer ${
              selectedAnswer === answer ? "bg-gray-700 border-transparent accent-purple-600" : ""
            } ${readyForNext && questions[currentQuestion].correctAnswer === i ? "accent-green-400 bg-green-800" : ""} ${
              readyForNext && questions[currentQuestion].correctAnswer !== i && selectedAnswer === answer ? "accent-red-400 bg-red-800" : ""
            }`}>
            <input
              id={answer}
              type="radio"
              value={answer}
              checked={selectedAnswer === answer}
              disabled={buttonLocked && selectedAnswer !== answer}
              onChange={handleChange}
              className="w-4 h-4 outline-none cursor-pointer"
            />
            <label htmlFor={answer} className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer" dangerouslySetInnerHTML={{ __html: domPurify.sanitize(answer) }} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-end justify-between gap-6 px-3">
        <button
          type="button"
          disabled={!selectedAnswer || buttonLocked}
          className="ml-auto focus:outline-none text-white bg-purple-700 enabled:hover:bg-purple-800 focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer"
          onClick={(e) => handleNext(selectedAnswer, e)}>
          {isLastQuestion ? "FINISH" : "NEXT"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
