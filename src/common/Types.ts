interface AnswerOption {
    answerOption?: String,
    isCorrect?: Boolean
}

interface Category {
    id: Number,
    name: String,
}

interface QuestionDB {
    id: Number,
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    category: Number,
    correctAnswer: String
}
interface Question {
    question?: String
}

export type {
    AnswerOption,
    Category,
    Question,
    QuestionDB,
}