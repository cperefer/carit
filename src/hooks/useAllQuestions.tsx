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

            const result = await getAll(DATABASE.TABLES.QUESTIONS, db);

            if (result.length > 0) {
                setQuestions(result);
            }
        };

        fetchQuestions();
    }, []);
};