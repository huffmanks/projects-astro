export interface INestedStyles {
  [key: string]: {
    [key: string]: string;
  };
}

// Quiz
export interface QuizResults {
  results: OriginalQuestion[];
}

export interface OriginalQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface SanitizedQuestion {
  number: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  selectedAnswer: number;
  isCorrect?: boolean;
}

// Interactive comments
export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: string;
  replies?: IReply[];
}

export interface IReply extends IComment {
  replyingTo: string;
}

export interface IStyles {
  [key: string]: string;
}
