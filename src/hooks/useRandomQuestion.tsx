import { useGameStore } from "@/store/gameStore";
import { useEffect, useRef } from "react";

export const useRandomQuestion = () => {
  const questions = useGameStore(state => state.questions);
  const setQuestions = useGameStore(state => state.setQuestions);
  const setActualQuestion = useGameStore(state => state.setActualQuestion);

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true; 

    if (questions.length === 0) return;

    const getRandomQuestion = () => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const result = questions[randomIndex];

      setActualQuestion(result);
      setQuestions(questions.filter((question) => question.id !== result.id));
    };

    getRandomQuestion();
  }, []);
};