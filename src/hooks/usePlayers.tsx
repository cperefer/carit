import { getAll, getDBConnection, insertPlayer } from '@/common/DBService';
import { PlayerDB } from '@/common/Types';
import { DATABASE } from '@/constants';
import React, { useEffect, useState } from 'react'

export const usePlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const populatePlayers = async () => {
            const db = await getDBConnection(); 

            //Prune and populate
            await db.executeSql(`DELETE FROM ${DATABASE.TABLES.PLAYERS}`);
            insertPlayer({username: "Migui", avatar: ""}, db);
            insertPlayer({username: "Ali", avatar: ""}, db);
            insertPlayer({username: "Agustin", avatar: ""}, db);
            insertPlayer({username: "Skippy", avatar: ""}, db);
            insertPlayer({username: "Satur", avatar: ""}, db);
            insertPlayer({username: "Velez", avatar: ""}, db);
            insertPlayer({username: "Gaspar", avatar: ""}, db);
        }
        
        const fetchPlayers = async () => {
            const db = await getDBConnection(); 
            setPlayers(await getAll(DATABASE.TABLES.PLAYERS, db));
        }

        // populatePlayers().then(fetchPlayers);
        fetchPlayers();
    }, [])

    return players;
}
