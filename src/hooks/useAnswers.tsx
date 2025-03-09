import { useGameStore } from "@/store/gameStore"
import { useMemo } from "react";
import { shallow } from "zustand/shallow";

export const useAnswers = () => {
    const actualQuestion = useGameStore(state => state.actualQuestion, shallow);

    return useMemo(() => {
        if (!actualQuestion) return [];

        return Array.from({ length: 4 }, (_, i) => ({
            answerOption: actualQuestion[`answer${i + 1}`],
            isCorrect: (i + 1).toString() === actualQuestion.correctAnswer,
        }));
    }, [actualQuestion]);
};
