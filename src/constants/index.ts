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
    WELCOME: "welcome",
    QUESTION: "question"
}

export { DATABASE, ROUTES };