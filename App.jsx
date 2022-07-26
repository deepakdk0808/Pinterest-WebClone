
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unplash from './api/unplash';
import { useEffect, useState } from 'react';

import { Routes, Route } from "react-router";
import {SinglePin} from './components/SinglePin';
import NoteFound from './components/NoteFound';
import FirstPage from './components/FirstPage';
import Profile from './components/profile';
import AddNewPin from './components/AddNewPin';
import Upload from './components/Upload';

function App() {
 
  const [pins,setPins]=useState ([]);

   
  const getImages=(term)=>{
    return unplash.get("https://api.unsplash.com/search/photos",{
      params:{query:term}
    })
  }

  const onSearchSubmit=(term)=>{
    getImages(term).then((res)=>{
      let results=res.data.results;

      let newPins=[
        ...results,
        ...pins,
      ]

      newPins.sort(function(a,b){
        return 0.5-Math.random()
      });
      setPins(newPins);
    })
  }

  const getNewPins=()=>{
    let promises=[];
    let pinData=[];

    let pins=["ocean","india","tokyo","cats","Bali","car","Bike"];

    pins.forEach((pin)=>{
      promises.push(getImages(pin).then((res)=>{
        let results=res.data.results;
        pinData=pinData.concat(results);
        pinData.sort(function(a,b){
          return 0.5-Math.random();
        })
      }));
    })
    Promise.all(promises).then(()=>{
      setPins(pinData);
    })
  }
  useEffect(()=>{
    getNewPins()
  },[])



  return (
    <div className="App">
      
      
  {
    localStorage.getItem("token")!==null?<Header onSubmit={onSearchSubmit}/>:null
  }
  {
    localStorage.getItem("token")!==null?<AddNewPin/>:null
  }
   
  <Routes>
    
    <Route path="/" element={localStorage.getItem("token")!==null?<Mainboard pins={pins}/>:<FirstPage/>} />
    <Route path="/pin/:id" element={<SinglePin/>} />
    <Route path="/pin/profile" element={<Profile/>} />
    <Route path="/upload" element={<Upload/>} />
    <Route path="*" element={<NoteFound/>} />
    </Routes>
    </div>
  );
}

export default App;
