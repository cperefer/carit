import { getAll, getDBConnection, insertPlayer } from '@/common/DBService';
import { PlayerDB } from '@/common/Types';
import { DATABASE } from '@/constants';
import { playersStore } from '@/store/playersStore';
import React, { useEffect, useState } from 'react'

export const usePlayers = () => {
    const players = playersStore(state => state.players)
    const setPlayers = playersStore(state => state.setPlayers)

    const fetchPlayers = async () => {
        const db = await getDBConnection(); 
        setPlayers(await getAll(DATABASE.TABLES.PLAYERS, db));
    }

    useEffect(() => {
        fetchPlayers();
    }, []);

    const addPlayer = async (username: string, avatar: string) => {
        const db = await getDBConnection(); 
        await insertPlayer({ username, avatar }, db);
        await fetchPlayers();
    }

    return { players, addPlayer, refreshPlayers: fetchPlayers };
}
