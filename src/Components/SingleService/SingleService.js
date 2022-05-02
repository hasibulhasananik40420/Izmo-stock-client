import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = () => {
    return (
        <div>
           
                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" class="btn btn-primary">Button</a>
                    </div>
                </div>

                <div>
                    <input className='w-/2.4 border border-red-700' type="number" name="" id="" />
                     <button className='bg-red-600 px-8 py-2'>Delete</button>
                </div>

                <div>
                <Link to='/manageinventory' className='bg-red-600 px-8 py-2'>Manage Inventories</Link>
                </div>
        </div>
    );
};

export default SingleService;