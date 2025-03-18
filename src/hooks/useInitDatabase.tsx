import { getDBConnection, initDatabase } from '@/common/DBService';
import { useEffect } from 'react'
import { usePlayers } from './usePlayers';

export const useInitDatabase = () => {
  useEffect(() => {
    const startDatabase = async () => {
      const players = usePlayers();

      if (!players.length) {
        const db = await getDBConnection();
        await initDatabase(db);
      }
    }

    startDatabase();
  })
}
