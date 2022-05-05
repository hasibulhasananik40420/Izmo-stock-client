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
                       
                      

                      <Link className="text-xl text-black" to="/">Navbar</Link>
                        <ul className="navbar-nav flex items-center flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item px-2">
                                <CustomLink className="nav-link active font-semibold text-xl" aria-current="page" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink className="nav-link font-semibold text-xl   p-0" to='/blogs'>Blogs</CustomLink>
                            </li>


                            {user && <>
                                <li className="nav-item pr-2">
                                    <CustomLink className="nav-link font-semibold text-xl  p-0" to='/manageinventory'>Manage Inventory</CustomLink>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link font-semibold text-xl  p-0" to='/additem'>Add Item</Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <CustomLink className="nav-link font-semibold text-xl p-0" to='/myitem'>My Item</CustomLink>
                                </li>
                                 <li>
                                    <img className='rounded-full md:w-[30px] md:h-[30px] mr-3' src={user?.photoURL} alt="" />
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