import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Main from './components/main';

function App() {
  const [altitude, setAltitude] = useState([]);
  const [hsi, setHis] = useState([]);
  const [adi, setAdi] = useState([]);

  useEffect(() => {
    doApi();
  })

  const doApi = async () => {
    let url = "http://localhost:3000/";
    await axios.get(url)
      .then((res) => {
        setAltitude(res.data.altitude);
        setHis(res.data.his);
        setAdi(res.data.adi);
       
        //console.log(res.data);
      })
  }


  return (
    <div >
    altitude : {altitude} HIs : {hsi}, ADI : {adi}
  <Main altitude={altitude} hsi={hsi} adi={adi}/>
    </div>
  );
}

export default App;
