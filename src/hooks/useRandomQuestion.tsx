import { useGameStore } from "@/store/gameStore";
import { useEffect } from "react";

export const useRandomQuestion = () => {
  const {questions, setQuestions, actualQuestion, setActualQuestion} = useGameStore();

  useEffect(() => {
    const getRandomQuestion =  () => {
        const result = questions[Math.floor(Math.random() * questions.length)];
        setActualQuestion(result);
        
        setQuestions(questions.filter((question) => question.id !== actualQuestion.id));
    }

    getRandomQuestion();
  }, [actualQuestion]);
}
