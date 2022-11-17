import { useEffect, useState } from "react";
import { openPopUp, closePopUp } from '../../features/counter/popup-upgrade';
import { useSelector, useDispatch } from 'react-redux';

export const useUpdateApp = () => {

    const dispatch = useDispatch();

    const broadcast = new BroadcastChannel('sw-update-channel');
    broadcast.onmessage = (event) => {
      if (event.data && event.data.type === 'CRITICAL_SW_UPDATE') {
        openPopUp();
        if(localStorage)
          localStorage.setItem('update', "1")
      }
    };
    const rebootSW = () => {
      dispatch(closePopUp());
      localStorage.setItem('update', "0");
      broadcast.postMessage({type: 'SKIP_WAITING'});
    }
    useEffect(() => {
      if(localStorage.getItem('update') === "1") {
        dispatch(openPopUp());
      }
    },[]);

    let updateApp = {rebootSW};

    return updateApp;
}  