import React, {useCallback, useEffect } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import CubeCounter from "../../containers/cube-counter";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counter-slice';
import { openModal, closeModal } from '../../features/counter/modal-slice';
import { openPopUp, closePopUp } from '../../features/counter/popup-upgrade';
import NewVersion from '../../components/new-version';


function Layout({children}) {
  
  const dispatch = useDispatch();
  //update version
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
  //work with store
  const count = useSelector((state) => state.counter.value);
  const modal = useSelector((state) => state.modal.value);
  const popUpUpgrade = useSelector((state) => state.popUpUpgrade.value);
  const callbacks = {
    openModal: useCallback(() => dispatch(openModal()), [openModal]),
    rebootSW: useCallback((rebootSW), [closePopUp]),
  };

  return (
    <>
        <Header openModal={callbacks.openModal}/>
        {children}
        <Footer/>
        {modal && <CubeCounter  closeModal={() => dispatch(closeModal())}
                                increment={() => dispatch(increment())}
                                decrement={() => dispatch(decrement())}
                                count={count}/>}
        {popUpUpgrade && <NewVersion rebootSW={callbacks.rebootSW}/>}              
    </>
  );
}

export default React.memo(Layout);