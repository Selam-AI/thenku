import React from 'react'
import Glance from './features/homepage/glance';
import Homenav from './features/homepage/Homenav';
import Hnavbar from './features/homepage/Hnavbar';
import Hbody from './features/homepage/Hbody';
import Dbody from './features/delve/Dbody';

function App() {
  return (
    <>

<Hnavbar/>
  <Dbody/>

<Homenav/>
<Hbody/>


    </>
  );
}

export default App