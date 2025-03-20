import { POINTS_CORRECT_ANSWER } from '@/constants';
import { useGameStore } from '@/store/gameStore'
import { useEffect } from 'react';

export const useInitScore = () => {
    const players = useGameStore(state => state.players);
    const setScore = useGameStore(state => state.setScore);

    useEffect(() => {
        const initScore = () => {
            const score = players.map((playerStore) => {
                return {
                    player: playerStore.id,
                    username: playerStore.username,
                    points: 0,
                }
            })

            setScore(score);
        }

        initScore();
    },[players]);
}
