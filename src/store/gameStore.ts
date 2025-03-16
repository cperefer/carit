import { GameStore, PlayerStore, QuestionDB, QuestionStore } from "@/common/Types";
import { create } from "zustand";


export const useGameStore = create<GameStore>((set, get) => ({
    actualQuestion: {
        id: 0,
        title: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        category: 0,
        correctAnswer: ""
    },
    questions: [],
    players: [],
    questionsAnswered: 0,
    score: [],
    turn: 0,
    setActualQuestion: (questionInput:QuestionDB) => set({actualQuestion: questionInput}),
    setPlayers: (playersInput:PlayerStore[]) => set({players: playersInput}),
    setQuestions: (questionsInput:QuestionStore[]) => set({questions: questionsInput}),
    setScore: (ScoreInput) => set({score: ScoreInput}),
    setTurn: (turnInput) => set({turn: turnInput})
}))