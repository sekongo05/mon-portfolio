import Mode from '../mode/mode';
import './Footer.css';

let Footer = ()=>{



    return <>
             <div className='h-[100px] bg-white dark:bg-black'></div>
            <div className='h-[100px] flex flex-col text-[11px] sm:text-[20px] w-full justify-center items-center bg-sky-400 dark:bg-neutral-900 text-black dark:text-white'>
                <p className=' flex justify-end items-center w-full  h-[50%] '>
                    <p className=" w-[50px] sm:w-[100px] sm:hidden h-[100%]  flex justify-center items-center ">
                        <Mode />     
                    </p>
                    <p className=" w-[70px] sm:w-[100px]  h-[100%]  flex justify-center items-center ">
                        <a href="#home" className='dark:hidden flex'> <img src='logo/tob.png' alt='' className='dark:hidden flex w-[40px]'/></a>
                        <a href="#home" className='dark:flex  hidden'> <img src='logo/tow.png' alt='' className='dark:flex  hidden w-[40px]' /></a>     
                    </p>
                </p>
                <p className='justify-center items-center  h-[40%] w-[95%] sm:w-full flex'>Copyright © 2025 par Sekongo Moussa | Tous droits réservés.</p>
            </div>

            </>
}


export default Footer;