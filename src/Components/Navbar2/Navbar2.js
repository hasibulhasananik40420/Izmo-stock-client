import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar2 = () => {
    const [user] = useAuthState(auth)
    //logout
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4




shadow-lg
navbar navbar-expand-lg navbar-light
">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className=" collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                       
                      

                      <Link className="text-xl text-black md:mr-94 md:ml-3" to="/"><span className='text-red-600 font-serif font-semibold text-2xl'>I</span><span className='text-gray-700 font-serif font-semibold text-2xl'>zmo</span> <span className='text-red-600 font-serif font-semibold text-2xl'>S</span><span className='text-gray-700 font-serif font-semibold text-2xl'>tock</span> </Link>
                        <ul className="navbar-nav flex items-center flex-col pl-0 list-style-none mr-auto md:ml-20">
                            <li className="nav-item px-2">
                                <CustomLink className="nav-link active font-semibold text-xl" aria-current="page" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink className="nav-link font-semibold text-xl   p-0" to='/blogs'>Blogs</CustomLink>
                            </li>
                             <li className="nav-item pr-2">
                                <CustomLink className="nav-link font-semibold text-xl   p-0" to='/offer'>Our Offer</CustomLink>
                            </li>


                            {user && <>
                                <li className="nav-item pr-2">
                                    <CustomLink className="nav-link font-semibold text-xl  p-0" to='/manageinventory'>Manage Inventory</CustomLink>
                                </li>
                                <li className="nav-item pr-2">
                                    <CustomLink className="nav-link font-semibold text-xl  p-0" to='/additem'>Add Item</CustomLink>
                                </li>
                                <li className="nav-item pr-2">
                                    <CustomLink className="nav-link font-semibold text-xl p-0" to='/myitem'>My Item</CustomLink>
                                </li>
                                 <li>
                                    <img className='rounded-full md:w-[30px] md:h-[30px] mr-3 w-[30px] h-[30px]' src={user?.photoURL? user?.photoURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXk5ueutLfn6eqrsbTZ3N2/xMbN0dO0ubzW2drGysy7wMLc3+DS1dfKztDh4+Tq7O3d3uCKAAAC+0lEQVR4nO2a2XLkIAxFjQCzeOH//3bwkkwn7cYSLdFTNdynrrxwcpEESB6Grq6urq6urq6urq6u/01w6FPLp8HMi80K4zx9AANWH5XSX1IumKEpBazB5XUfpbWbG0JA+LX+SeF8agRg1BXADhHXJkaEVwAbg/LyDGALBBvELM0ArkzQgCHeEWSGUZLhbhdOBsF4gBlDkBlWMYQJR6CUk7IBIpJALByw27BLaCscnkAHCRtgJJggYwMQTMg2LAI2GApBFv+hCaXT6coGw46QiCYIBCS6LH3JcRMQ82GzgR2BGAoSwYAuzt8I7EWaVBV2BPZ4pBIoZbkRqKGgVOwIEghkAv5YIBPwZwS9LrAf15aMwP2kgYVcoNnvTZ6cEtwE9Ky07ASJeEhIPCWIFwb260LWSiNgr40D9lX9jeD5CfLtkeKCzMOWYoOMCTka0Aia/Yg6ha+Qcj2O+17XSSDYbcIlpraCTVjAvG11lAPYGBCnlZNrdh0M5oZBs78lLxiKMSm8CyfDWujA6qUBQVYaL8cRWx9+ajUUAQgXIwnt5kYTkQNiXZx68CL/jL7tcCpDDNNoj8VzHlq/fmRUCCkN62SmFdInZoR5zby68btMxhgacmxr+8U6d8TAPqXc9sLFMJtMIsyR/3kfotPXSbn9OdpZkAKSWeKL1X+AuGBEKGBafg9oCxSKfX4Mg48v56OvvBgZx6aQRuR16SeFCkz7AcOrIwFhheVwAuYaBx6ceDcmYELMRssQ7r1WR1pq9+ARItaHBEzv7MEjRO34FmaW9XeGuu4bvbtUYqh569MHEGUGR8+MdzPhSY54rwR2AuoTJ5E6KmgGigeckVjFQBrRU4TvfJCaSjQGZLFOTDXxkgG3DUKBcAhVovBNrRphjgvmqvgkRFbQ+rx03UektAmYvix5MEzWXWNWqir91V19orXbKxnKjZAkT3D3YQP5c5EahOIAk/65SI2KgzP5lNxUrk4Cl6Vnlc8q8mS6SsUbHDRR0YWurq6urn9FfwCAMR/QMmgl9QAAAABJRU5ErkJggg=='} alt="" />
                                 </li>

                            </>

                            }

                            {
                                user ?
                                    <button className='text-xl font-semibold  hover:text-cyan-500 duration-500' onClick={() => handleLogout()}>Singout</button>
                                    :

                                    <li className="nav-item pr-2">
                                        <CustomLink className="nav-link font-semibold text-xl  p-0" to='/login'>Login</CustomLink>
                                    </li>

                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;