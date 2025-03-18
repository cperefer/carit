import { onBackPressAlert } from '@/common/Alerts';
import React, { useEffect } from 'react'
import { BackHandler } from 'react-native';

export const useRemoveBackHandler = () => {
    useEffect(() => {
        if (!__DEV__) {
          const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPressAlert);
        
          return () => backHandler.remove();
        }
      }, []);
}
