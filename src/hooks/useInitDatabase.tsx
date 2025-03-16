import { getDBConnection, initDatabase } from '@/common/DBService';
import { useEffect } from 'react'

export const useInitDatabase = () => {
  useEffect(() => {
    const startDatabase = async () => {
        const db = await getDBConnection();
        await initDatabase(db);
    }

    startDatabase();
  })
}
