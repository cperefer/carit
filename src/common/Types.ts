interface AnswerOption {
    answerOption?: String,
    isCorrect?: Boolean
}

interface Category {
    id: Number,
    name: String,
}

interface GameDB {
    id?: Number,
    startedAd?: Date,
    finishedAd?: Date,
    players: String,
    winner: Number,
    numQuestions: Number,
}

interface PlayerDB {
    id?: Number,
    username: String,
    avatar: String,
    createdAt?: Date,
    numGames?: Number,
}

interface QuestionDB {
    id: Number,
    question: Question,
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
    GameDB,
    PlayerDB,
    Question,
    QuestionDB,
}