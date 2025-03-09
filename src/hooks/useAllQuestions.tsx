import { _initQuestions, getAll, getDBConnection } from '@/common/DBService';
import { DATABASE } from '@/constants';
import { useGameStore } from '@/store/gameStore';
import { useEffect, useState } from 'react'

export const useAllQuestions = () => {
    const setQuestions = useGameStore(state => state.setQuestions);
    const [isDBReady, setIsDBReady] = useState(false); // Nueva bandera

    useEffect(() => {
        const fetchQuestions = async () => {
            const db = await getDBConnection();

            // if (!isDBReady) {
            //     console.log("⏳ Base de datos aún no lista. Esperando...");
            //     return;
            // }

            const result = await getAll(DATABASE.TABLES.QUESTIONS, db);
            console.log(result)
            if (result.length > 0) {
                setQuestions([...result]);
            }
        };

        fetchQuestions();
    }, []); // Ahora solo se ejecuta cuando la BD está lista

    // useEffect(() => {
    //     const initDB = async () => {
    //         const db = await getDBConnection();
    //         await _initQuestions(db);
    //         setIsDBReady(true); // 🔥 Marcar que la BD está lista
    //     };

    //     initDB();
    // }, []);

};