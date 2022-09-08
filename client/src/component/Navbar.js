import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function navbar() {
  return (<>

{/* <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-dark">
    <div className="container">
    <h3 className='text-light' >MEMORIES</h3> */}
        {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav ml-auto">
            <li className="btn btn-outline-success fw-bolder">
                <Link to="/" className='nav-link text-light'>Home</Link>
                </li>
              
                <li className="btn btn-outline-success fw-bolder">
                <Link to="/users" className='nav-link text-light'>Memories</Link>
                </li>
            </ul>
           
         </div>
    </div>
</nav>  */}

<nav className="navbar navbar-expand-sm sticky-top navbar-light bg-dark">
            <div className="container-fluid">
                <h3 className='text-light '>Memories</h3>
                
              
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2 col-6" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav">
                    <ul className="list-group list-group-horizontal">
                        <li className="btn btn-outline-success"> <Link to="/" className='text-light fw-bold'>Home</Link> </li> &nbsp;&nbsp;
                        <li className="btn btn-outline-success">  <Link to="/users" className='text-light fw-bold'>Memories</Link> </li>&nbsp;&nbsp;

                       
                    </ul>

                </ul>
            </div>
        </nav>

  
    
      {/* <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-dark">
    <div className="container-fluid">
        <h3 className='text-light' >MEMORIES</h3>
        <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav ml-auto">
            <ul className="list-group list-group-horizontal">
                <li className="btn btn-outline-success fw-bolder"> <Link to="/" className='text-light'>Home</Link> </li> &nbsp;&nbsp;
                <li className="btn btn-outline-success fw-bolder"> <Link to="/users" className='text-light'>Memories</Link> </li>&nbsp;&nbsp;

                
            </ul>

        </ul>
        </div>
    </div>
</nav> */}
</>
  )
}

