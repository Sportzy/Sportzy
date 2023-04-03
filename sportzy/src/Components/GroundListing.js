import stadium from './stadium.png';

function GroundListing() {
    return (
        <div className='container m-3'>
            <div className='row'>
                <div className='col-sm-12 col-lg-6'>
                    <div className="card text-right d-flex flex-row justify-content-center align-items-center">
                        <span className='float-left col-lg-2 col-sm-12 m-2'> <img className="card-img-left className='img-thumbnail float-left " src={stadium} style={{width: 200, height: 200}}/></span>


                        <div className="card-body mx-5 pt-4">
                           <h5 className="card-title float-left">Stadium Name</h5>
                            <p className="card-text">Location: City Name<br></br>
                                    Sports: Football, Cricket, Volleyball<br></br>
                                    Price: Rs.10000/-
                            </p>
        
                        <button type="button" className="btn btn-large text-white" style={{backgroundColor: '#902BF5'}}>Book Now</button>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundListing;