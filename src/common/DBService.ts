import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";
import { DATABASE } from "@/constants";

const {TABLES} = DATABASE;

enablePromise(true);

const getDBConnection = async () => {
    return openDatabase({ name: DATABASE.NAME });
}

const initDatabase = async (db: SQLiteDatabase) => {
    await _initCategoriesTable(db);
    await _initPlayersTable(db);
    await _initGamesTable(db);
    await _initQuestionsTable(db);
    await _initAuxTables(db);
}

const _initCategoriesTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.CATEGORIES}(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            timesAppeared INTEGER DEFAULT 0,
        );`
    );
}

const _initPlayersTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.PLAYERS}(
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL UNIQUE,
            avatar TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            numGames INTEGER DEFAULT 0
        );`
    );
}

const _initGamesTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.GAMES}(
            id INTEGER PRIMARY KEY,
            startedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            finishedAt DATETIME,
            players TEXT NOT NULL,
            winner INTEGER,
            numQuestions INTEGER,
            FOREIGN KEY (winner)
                REFERENCES players(id)
        );`
    );
}


const _initQuestionsTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.QUESTIONS}(
            id INTEGER PRIMARY KEY,
            question TEXT NOT NULL,
            answer1 TEXT NOT NULL,
            answer2 TEXT NOT NULL,
            answer3 TEXT NOT NULL,
            answer4 TEXT NOT NULL,
            category INTEGER NOT NULL,
            correctAnswer TEXT NOT NULL,
            timesAppeared INTEGER DEFAULT 0,
            FOREIGN KEY (category)
                REFERENCES category(id)
        );`
    );
}

const _initAuxTables = async (db: SQLiteDatabase) => {
    await _initPlayersCategoriesTable(db);
    await _initGamesCategoriesTable(db);
}

const _initPlayersCategoriesTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.PLAYERS_CATEGORIES}(
            id INTEGER PRIMARY KEY,
            player INTEGER NOT NULL,
            category INTEGER NOT NULL,
            FOREIGN KEY (player)
                REFERENCES players(id),
            FOREIGN KEY (category)
                REFERENCES categories(id)
        );`
    );
} 

const _initGamesCategoriesTable = async (db: SQLiteDatabase) => {
    await db.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLES.GAMES_CATEGORIES}(
            id INTEGER PRIMARY KEY,
            game INTEGER NOT NULL,
            category INTEGER NOT NULL,
            FOREIGN KEY (game)
                REFERENCES games(id),
            FOREIGN KEY (category)
                REFERENCES categories(id)
        );`
    );
}

const _dropDatabase = async (db: SQLiteDatabase) => {
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.CATEGORIES}`);
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.PLAYERS}`);
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.GAMES}`);
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.QUESTIONS}`);
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.PLAYERS_CATEGORIES}`);
    await db.executeSql(`DROP TABLE IF EXISTS ${TABLES.GAMES_CATEGORIES}`);
}

export { getDBConnection, initDatabase };