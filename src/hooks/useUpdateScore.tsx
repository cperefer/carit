import { POINTS_CORRECT_ANSWER } from '@/constants';
import { useGameStore } from '@/store/gameStore'

export const useUpdateScore = (isCorrect:Boolean) => {
    const turn = useGameStore(state => state.turn);
    const score = useGameStore(state => state.score);
    const players = useGameStore(state => state.players);
    const setScore = useGameStore(state => state.setScore);

    const updateScore = () => {
        console.log(score)
        if (isCorrect) {
            const newScore = score.map((scoreStore) => {
                if (players[Number(turn)].id === scoreStore.player) {
                    scoreStore.points += POINTS_CORRECT_ANSWER
                }

                return scoreStore;
            });

            setScore(newScore);
        }
    }

    return updateScore;
}
