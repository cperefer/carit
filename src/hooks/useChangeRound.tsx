import { useGameStore } from '@/store/gameStore'

export const useChangeRound = () => {
    const round = useGameStore(state => state.round);
    const setTurn = useGameStore(state => state.setTurn);
    const setRound = useGameStore(state => state.setRound);

    const changeRound = () => {
        setRound(Number(round) + 1);
        setTurn(0);
    }

    return changeRound;
}
