import React, {useCallback} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import CubeCounter from "../../containers/cube-counter";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counter-slice';
import { openModal, closeModal } from '../../features/counter/modal-slice';


function Layout({children}) {

  //work with store
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const modal = useSelector((state) => state.modal.value);
  const callbacks = {
    openModal: useCallback(() => dispatch(openModal()), [openModal]),
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
    </>
  );
}

export default React.memo(Layout);