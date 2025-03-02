import { getDBConnection, insertPlayer } from '@/common/DBService';
import { PlayerDB } from '@/common/Types';
import { useEffect, useState } from 'react'

export const useCreatePlayer = () => {
    const [players] = useState([]);


    const createPlayer = async ({ username, avatar }: PlayerDB) => {
        const db = await getDBConnection();
        insertPlayer({ username, avatar }, db);
    }

    return createPlayer;

}
