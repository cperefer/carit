import { useGameStore } from '@/store/gameStore'

export const useChangeTurn = () => {
    const turn = useGameStore(state => state.turn);
    const setTurn = useGameStore(state => state.setTurn);
    const players = useGameStore(state => state.players);

    const changeTurn = () => {
        if (Number(turn) < players.length - 1) {
            setTurn(Number(turn) + 1);
        }
    };

    return changeTurn;
}
