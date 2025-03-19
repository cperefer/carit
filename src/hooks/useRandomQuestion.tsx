import { useGameStore } from "@/store/gameStore";
import { useEffect } from "react";

export const useRandomQuestion = () => {
  const questions = useGameStore(state => state.questions);
  const setQuestions = useGameStore(state => state.setQuestions);
  const actualQuestion = useGameStore(state => state.actualQuestion);
  const setActualQuestion = useGameStore(state => state.setActualQuestion);

  useEffect(() => {
    console.log("question " + questions.length)

    if (questions.length === 0) return;
  
    const getRandomQuestion =  () => {
      console.log("useRandomQuestion")
        const result = questions[Math.floor(Math.random() * questions.length)];
        setActualQuestion(result);
        
        setQuestions(questions.filter((question) => question.id !== actualQuestion.id));
    }

    getRandomQuestion();
  }, [actualQuestion]);
}
