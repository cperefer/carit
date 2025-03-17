interface AnswerOption {
    answerOption?: String,
    isCorrect?: Boolean
}

interface Category {
    id: Number,
    name: String,
}

interface Question {
    question?: String
}

// Database types
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

interface PlayerGame {
    id: Number,
    username: String,
    avatar: String
}

interface QuestionDB {
    id: Number,
    title: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    category: Number,
    correctAnswer: String
}

// Store types
interface AllQuestionsStore {
    questions: QuestionStore[],
    setQuestions: (questionsInput:QuestionStore[]) => void
}

interface ActualQuestionStore {
    question: QuestionDB,
    setQuestion: (questionInput:QuestionDB) => void
}

interface GameStore {
    actualQuestion: QuestionDB,
    players: PlayerStore[],
    questions: QuestionStore[],
    questionsAnswered: Number,
    score: ScoreStore[],
    turn: Number,
    round: Number,
    setActualQuestion: (questionInput:QuestionDB) => void
    setPlayers: (playersInput:PlayerStore[]) => void
    setQuestions: (questionsInput:QuestionStore[]) => void,
    setScore: (scoreInput:ScoreStore[]) => void,
    setTurn: (turnInput:Number) => void,
    setRound: (roundInput:Number) => void,
}

interface PlayersStore {
    players: PlayerStore[],
    setPlayers: (playersInput:PlayerStore[]) => void
}

interface PlayerStore {
    id: Number,
    username: String,
    avatar: String
}

interface ScoreStore {
    player: Number,
    points: Number,
}

interface QuestionStore {
    id: Number,
    title: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    category: Number,
    correctAnswer: String
}

export type {
    ActualQuestionStore,
    AllQuestionsStore,
    AnswerOption,
    Category,
    GameDB,
    GameStore,
    PlayerDB,
    PlayerGame,
    PlayersStore,
    PlayerStore,
    Question,
    QuestionDB,
    QuestionStore
}