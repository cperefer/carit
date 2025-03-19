const DATABASE = {
    NAME: 'carIt.db',
    TABLES: {
        CATEGORIES: "categories",
        GAMES: "games",
        GAMES_CATEGORIES: "gamesCategories",
        PLAYERS: "players",
        PLAYERS_CATEGORIES: "playersCategories",
        QUESTIONS: "questions",
    }
};

const ROUTES = {
    ANSWER_RESULT: "answerResult",
    CREATE_PLAYER: "createPlayer",
    NEXT_PLAYER: "nextPlayer",
    PLAYERS_SELECTION: "playersSelection",
    ROUND_RESULTS: "roundResults",
    START_GAME: "startGame",
    QUESTION: "question",
    WELCOME: "welcome",
}

const POINTS_CORRECT_ANSWER = 100;

export { 
    DATABASE,
    POINTS_CORRECT_ANSWER,
    ROUTES ,
};