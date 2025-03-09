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
    CREATE_PLAYER: "createPlayer",
    PLAYERS_SELECTION: "playersSelection",
    START_GAME: "startGame",
    QUESTION: "question",
    WELCOME: "welcome",
}

export { DATABASE, ROUTES };