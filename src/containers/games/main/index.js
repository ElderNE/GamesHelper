import React from 'react';
import HomePage from '../../../components/home-page';
import Layout from '../../layout';

function Main() {

  return (
    <Layout>
        <HomePage/>
    </Layout>
  );
}

export default React.memo(Main);