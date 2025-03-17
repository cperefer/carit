import { useGameStore } from '@/store/gameStore'

export const useChangeTurn = () => {
    const turn = useGameStore(state => state.turn);
    const round = useGameStore(state => state.round);
    const setTurn = useGameStore(state => state.setTurn);
    const setRound = useGameStore(state => state.setRound);
    const players = useGameStore(state => state.players);

    const changeTurn = () => {
        console.log(turn)
        if (Number(turn) < players.length - 1) {
            setTurn(Number(turn) + 1);
        } else {
            setRound(Number(round) + 1);
            setTurn(0);
        }
    };

    return changeTurn;
}
