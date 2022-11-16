import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './containers/games/main';
import Munchkin from './containers/games/munchkin';
import Uno from './containers/games/uno';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={''} element={<Main/>}/>
        <Route path={'/munchkin'} element={<Munchkin/>}/>
        <Route path={'/uno'} element={<Uno/>}/>
        <Route path={'*'} element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);
