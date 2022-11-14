import React, {useCallback} from 'react';
import Layout from '../../layout';
import { useEffect } from 'react';
import PlayersCounter from '../../../components/players-counter';
import AddPlayer from '../../../components/add-player';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer, clearPlayers, changeCount, setValue } from '../../../features/counter/players-uno-slice';

function Uno() {

  //work with store
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playersUno.value);
  const callbacks = {
    addPl: useCallback((e) => {dispatch(addPlayer(e.target.label.value));
                              e.preventDefault();
                              e.target.reset();},[addPlayer]),
    clPl: useCallback(() => dispatch(clearPlayers()), [clearPlayers]),
    chCount: useCallback((e, i) => {dispatch(changeCount([(e.target.value === 'minus')? 
                                                          -e.currentTarget.inputText.value:
                                                          e.currentTarget.inputText.value, i]));
                              e.preventDefault();
                              e.currentTarget.reset();},[changeCount]),
  };
  
  //check players in lockalStorage
  useEffect(() => {
    if(localStorage.getItem('uno')) {
      dispatch(setValue(JSON.parse(localStorage.getItem('uno'))));
    }
  },[]);

  return (
    <Layout>
      <AddPlayer      addPlayer={callbacks.addPl}
                      clearPlayers={callbacks.clPl}/>
      <PlayersCounter players={players} 
                      game={'uno'}
                      chCount={callbacks.chCount}/>
    </Layout>
  );
}

export default React.memo(Uno);