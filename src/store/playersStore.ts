import { PlayersStore, PlayerStore } from "@/common/Types";
import { create } from "zustand";

export const playersStore = create<PlayersStore>((set, get) => ({
    players: [],
    setPlayers: (playersInput:PlayerStore[]) => set({players: playersInput}),
}))