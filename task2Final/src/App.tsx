import React, { useState } from 'react';

import { RadioButton , getUnderlined} from './components/RadioButton';
import { SearchBox } from './components/SearchBox';
import { SearchButton } from './components/SearchButton';
import Button from './components/Button';
import './components/App.css'

import search from './components/icons/search.svg';
import { DataGet, DataPost } from './components/DataGet';
import { ListTypeInput } from './components/ListTypeInput';



function App() {

  const [buttonData, setButtonData] = useState('');
  const [load,setLoad] = useState(false);
  const pushData = async () => { 
    setButtonData(await DataGet('http://localhost:8080/button'));
    setLoad(true);
  }
  
  const datas:string[]=["","option1","option2"];
  const [listInputData, setListInputData] = useState('');
  const listData = async () => { 
    setListInputData(await DataGet('http://localhost:8080/listinput'));
    setLoad(true);
  }

  const [inpData, setInpData] = useState('');
  const [inputBackendData, setInputBackendData] = useState({msg: ''});
  const inputData = async () => { 
    await DataPost('http://localhost:8080/input', {msg : inpData})
    setInputBackendData(await DataGet('http://localhost:8080/input'));
    setLoad(true);
  }

  const clear = () => {
    setInputBackendData({msg: ''});
    setButtonData('');
    setListInputData('');
    setLoad(false);
  }

  return (
    <div className='window'>

       <div className='header'>
         <button className='close'>X</button>
       </div>

       <div className='components'>
         <h2>Search Stop Over Point</h2>
         <h4>Enter Search Criteria</h4>
         <div className='grid-container'>
         <div className="radios">
           <RadioButton group={'radio'} label={getUnderlined('v', 'Revenue')} value={'Revenue'} id={'radio-button-one'}/>
           <RadioButton group={'radio'} label={getUnderlined('B', 'Award(B)')} value={'Award(B)'} id={'radio-button-two'}/>
         </div>

         <div className='text-box-search'>
           <SearchBox onChange={(e)=> setInpData(e.target.value)} size={3}/>
           <SearchButton src={search} onClick={(e) => { inputData() }}/>
         </div>

         <div className='box-one'>
            <div className="home">
              <ListTypeInput label={'List'}  data={datas}/> 
              <SearchButton src= {search} onClick={(e) => { listData() }}/>
            </div>
         </div>

         <div className='box-two'>
           <Button       
            header = "Availability"          
            footer="(F1)"       
            onClick={(e)=> { pushData() }}      
           />  
         </div>
</div>
         {load && (
         <div className='results'>
           
            <h3>SEARCH RESULTS</h3>
             <p>{buttonData} </p>
             <p>{listInputData}</p>
             <p>{inputBackendData.msg}</p>
          </div>)  }
          
       </div>
       
       <div className='footer'>
          <button className='btn' onClick={(e) => clear ()}>Close</button>
       </div>
       
    </div>
  );
}

export default App;