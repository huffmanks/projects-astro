import { Play, RotateCcw } from "lucide-react";

import type { SanitizedQuestion } from "../../types";
import { domPurify } from "../../utils";

interface Props {
  questions: SanitizedQuestion[];
  score: number;
  handleRetry: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleNewQuiz: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Score = ({ questions, score, handleRetry, handleNewQuiz }: Props) => {
  const total = questions.length;
  const scorePercentage = Number(((score / total) * 100).toFixed(1));
  const questionLabel = total - score === 1 ? "question" : "questions";

  return (
    <>
      <div className="grid items-center justify-center gap-8 px-4">
        <div className="text-center">
          <div className="mb-3 text-2xl sm:text-4xl">
            {scorePercentage > 65 ? "Congrats! 🎉" : "Nice try! 🤪"}
          </div>
          <div className="mb-6 text-4xl font-bold sm:text-7xl">
            <span className="text-purple-600">{scorePercentage}</span>%
          </div>
          <div>
            You missed {total - score} {questionLabel}.
          </div>
        </div>

        {questions.map((item) => (
          <AnsweredQuestion key={item.question} item={item} />
        ))}

        <div className="flex flex-col items-center justify-end gap-x-4 gap-y-7 sm:flex-row">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-purple-700 px-5 py-2.5 font-bold tracking-wider text-white focus:ring-4 focus:outline-none enabled:cursor-pointer enabled:hover:border-transparent enabled:hover:bg-gray-800 enabled:focus:ring-purple-300 disabled:opacity-60 dark:border-purple-600 dark:enabled:hover:border-transparent dark:enabled:hover:bg-gray-700 dark:enabled:focus:ring-purple-900"
            onClick={handleRetry}>
            <RotateCcw className="h-5 w-5" />
            <span>RETRY</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-transparent bg-purple-700 px-5 py-2.5 font-bold tracking-wider text-white focus:ring-4 focus:outline-none enabled:cursor-pointer enabled:hover:bg-purple-800 enabled:focus:ring-purple-300 disabled:opacity-60 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900"
            onClick={handleNewQuiz}>
            <Play className="h-5 w-5" />
            <span>NEW QUIZ</span>
          </button>
        </div>
      </div>
    </>
  );
};

function AnsweredQuestion({ item }: { item: SanitizedQuestion }) {
  const answerColor =
    item.correctAnswer === item.selectedAnswer ? "text-green-600" : "text-red-600";

  return (
    <div>
      <div className="mb-2 px-3 text-balance">
        <span className="mr-2 text-lg font-bold text-purple-600">#{item.number}</span>
        <span dangerouslySetInnerHTML={{ __html: domPurify.sanitize(item.question) }} />
      </div>

      <div className="px-3">
        <div className="flex items-center gap-3">
          <span>Selected:</span>
          <span
            className={`font-bold ${answerColor}`}
            dangerouslySetInnerHTML={{
              __html: domPurify.sanitize(item.answers[item.selectedAnswer]),
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <span>Correct:</span>
          <span
            className="font-bold text-green-600"
            dangerouslySetInnerHTML={{
              __html: domPurify.sanitize(item.answers[item.correctAnswer]),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Score;
