import './Header.css';
import Mode from '../mode/mode';
import { useState } from 'react';

let Header = ()=>{
    const [menu, setMenu] = useState(false)


   

    return <>
             <div className=' fixed  top-0 right-0 left-0 h-[100px] w-full  z-50 flex justify-between items-center dark:bg-black bg-white   dark:text-white text-black'  >
                <div className=' flex  w-2/3  justify-start items-center  sm:w-[20%] h-[100%]'>
                    <p className='text-[22px] pl-[25px] font-extrabold sm:text-[25px]'>  <span className='text-sky-400'>SEKONGO_</span>DEV </p>
                </div>
                <div className=' hidden sm:flex sm:justify-center sm:items-center font-bold   sm:w-[70%] sm:h-[100%]'>

                    <ul id='ul' className='flex justify-end  text-[20px] items-center  w-[100%] h-[90%] gap-[30px]  pr-[50px] '>
                        <li className=''><a href="#home">Home</a></li>
                        <li><a href="#propos">A propos</a></li>
                        <li><a href="#compet">Compétences</a></li>
                        <li><a href="#certif">Certifications</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projet">Projets</a></li>
                        <li id='cont' className='' ><a href="https://api.whatsapp.com/send?phone=2250153761320&text=Bonjour%20Mr%20SEKONGO%2C%20je%20veux%20en%20savoir%20plus%20sur%20vos%20services%2E" target="_blank">Contactez-Moi</a></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center w-1/3 h-[100%]   sm:hidden '>
                   <svg 
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='w-[58px] dark:text-white text-black  cursor-pointer'
                    onClick={()=> setMenu(!menu)}
                    
                    >
                        <path  d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                   </svg>
                </div>
                <div className='w-1/2 hidden sm:flex sm:justify-center  sm:items-center   sm:w-[10%] h-[100%]'>
                        <Mode />
                </div>
            </div>
           {menu && (


            <div id='mn' className='flex fixed w-[100%]  z-40 mt-[100px] h-[300px]  bg-sky-700  items-center sm:hidden'>
                <ul className='flex flex-col justify-center gap-2 w-[90%] h-full  items-center pl-[50px] text-[20px] font-bold text-white dark:text-white  '>
                        <li onClick={()=> setMenu(false)}><a href="#home">Home</a></li>
                        <li onClick={()=> setMenu(false)} ><a href="#propos">A propos</a></li>
                        <li onClick={()=> setMenu(false)}><a href="#compet">Compétences</a></li>
                        <li onClick={()=> setMenu(false)}><a href="#certif">Certifications</a></li>
                        <li onClick={()=> setMenu(false)}><a href="#services">Services</a></li>
                        <li onClick={()=> setMenu(false)}><a href="#projet">Projets</a></li>
                        <li onClick={()=> setMenu(false)} ><a href="https://api.whatsapp.com/send?phone=2250153761320&text=Bonjour%20Mr%20SEKONGO%2C%20je%20veux%20en%20savoir%20plus%20sur%20vos%20services%2E" target="_blank">Contactez-Moi</a></li>
                    </ul>
                    <div className=' flex flex-col justify-start items-start h-[90%] ml-[-30px] w-[10%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={()=> setMenu(false)} className="size-10 text-white dark:text-white cursor-pointer">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>

                    </div>
            </div>
           )}
            
            </>
}


export default Header;