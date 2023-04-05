import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button } from 'bootstrap';
import statecity from './StateCity.json';
import sport from './SportsList.json';
import Navbar from './Components/Navbar';
import GroundListing from './Components/GroundListing';

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

  const handlesports=(e)=>{
    const getsportsId = e.target.value;
    const getsports = sport.find(sport => sport).sports_name;
  }

  return (
    <><Navbar />
    
    <div className='container text-center p-2'>

      <div className='container-fluid mt-5'>
        <div className='row pb-2'>
          <div className='col-sm'>
            <select name='state' style={{backgroundColor: "#36454F"}} className='text-white text-center p-2  rounded m-3' id='state' onChange={(e) => handlestate(e)}>
              <option value=''>Select a State</option>

              {statecity.map((getstate, index) => (
                <option value={getstate.state_code} key={index}>{getstate.state_name}</option>
              ))}

            </select>
          </div>

          <div className='col-sm'>
            <select name='city' style={{backgroundColor: "#36454F"}} className='text-white text-center px-5 p-2 rounded m-3' id='city' onChange={(e) => handlecity(e)}>
              <option value={''}>Select a City</option>

              {city.map((getcity, index) => (
                <option value={getcity.city_code} key={index}>{getcity.city_name}</option>
              ))}

            </select>
          </div>

          <div className='col-sm'>
            <select name='sports' style={{backgroundColor: "#36454F"}} className='text-white text-center px-5 p-2 rounded m-3' id='sports' onChange={(e) => handlesports(e)}>
              <option value={''}>Select a Sport</option>

              {sport.map((getsports, index) => (
                <option value={getsports.sports_id} key={index}>{getsports.sports_name}</option>
              ))}

            </select>
          </div>
        </div>

        <div className='row m-4'>
          <SearchButton />
        </div>
              
        <GroundListing />
        <GroundListing />
      </div>
    </div></>
  );
}

function SearchButton() {
 function submitClick() {
  alert("Request Submitted");
 }
 
  return (
    <div className='text-center'>
       <button onClick={submitClick} className="btn text-white" style={{backgroundColor: '#902BF5'}} type="button">
          Submit
        </button>
    </div>
  );
}

export default App;
