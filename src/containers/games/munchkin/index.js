import React, {useCallback} from 'react';
import { useEffect } from 'react';
import AddPlayer from '../../../components/add-player';
import PlayersCounter from '../../../components/players-counter';
import Layout from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer, clearPlayers, changeCount, setValue } from '../../../features/counter/players-munchkin-slice';

function Munchkin() {

  //work with store
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playersMunchkin.value);
  const callbacks = {
    addPl: useCallback((e) => {dispatch(addPlayer(e.target.label.value));
                              e.preventDefault();
                              e.target.reset();},[addPlayer]),
    clPl: useCallback(() => dispatch(clearPlayers()), [clearPlayers]),
    chCount: useCallback((e, i) => {dispatch(changeCount([ (e.target.value === 'minus')? -1: 1 , i]));
                              e.preventDefault();
                              e.currentTarget.reset()},[changeCount]),
  };

  //check players in lockalStorage
  useEffect(() => {
    if(localStorage.getItem('munchkin')) {
      dispatch(setValue(JSON.parse(localStorage.getItem('munchkin'))));
    }
  },[]);

  return (
    <Layout>
      <AddPlayer      addPlayer={callbacks.addPl}
                      clearPlayers={callbacks.clPl}/>
      <PlayersCounter players={players} 
                      game={'munchkin'}
                      chCount={callbacks.chCount}/>
    </Layout>
  );
}

export default React.memo(Munchkin);