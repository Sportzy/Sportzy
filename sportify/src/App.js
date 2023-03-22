import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button } from 'bootstrap';
import statecity from './StateCity.json';
import sport from './SportsList.json';

function App() {

  const [stateId, setstateId] = useState('');
  const [city, setcity] = useState([]);
  const [cityId, setcityId] = useState('');

  const handlestate=(e)=>{
    const getstateId = e.target.value;
    const getcitydata = statecity.find(state => state.state_code===getstateId).cities;
    setcity(getcitydata);
  }

  const handlecity=(e)=>{
    const getcityId = e.target.value;
  }

  const handlesport=(e)=>{
    const getsport = e.target.value;
    console.log(getsport);
  }

  return (
    <div className='container text-center p-2'>
        <h1>Sportify</h1>

      <div className='container-fluid mt-5'>
          <div className='row bg-primary p-4'>
            <div className='col-sm'>
              <select name='state' className='p-1 rounded m-3' id='state' onChange={(e)=>handlestate(e)}>
                <option value=''>--Select a State--</option>

                {
                  statecity.map( (getstate, index)=>(
                    <option value={getstate.state_code} key={index}>{getstate.state_name}</option>
                  ))
                }

              </select>
            </div>

            <div className='col-sm'>
              <select name='city' className='p-1 rounded m-3' id='city' onChange={(e)=>handlecity(e)}>
                <option value={''}>--Select a City--</option>
                
                {
                  city.map( (getcity, index)=>(
                    <option value={getcity.city_code} key={index}>{getcity.city_name}</option>
                  ))
                }

              </select>
            </div>

            <div className='col-sm'>
              <select name='sports' className='p-1 rounded m-3' id='sports' onChange={(e)=>handlesport(e)}>
                <option value={''}>--Select a Sport--</option>

                {
                  sport.map((getsports, index)=>(
                    <option value={getsports.sports_id} key={index}>{getsports.sports_name}</option>
                  ))
                }

              </select>
            </div>
          </div>
                
            <div className='row m-4'>
              <SearchButton />
            </div>
      </div>
    </div>
  );
}

function SearchButton() {
 function submitClick() {
  alert("Request Submitted");
 }
 
  return (
    <div className='text-center'>
       <button onClick={submitClick} className="btn btn-primary" type="submit">
          Submit
        </button>
    </div>
  );
}

export default App;
