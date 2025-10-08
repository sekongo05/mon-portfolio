
import './Home.css';
let Home = ()=>{



    return <>
            <div id='home' className='h-[100px] bg-white dark:bg-black'>
                
            </div>
            <div  className="h-[100vh] z-10  overflow-hidden flex justify-center items-center flex-col  text-black dark:text-white
              sm:h-[calc(100vh-100px)] sm:flex-row sm:bg-no-repeat sm:bg-center  bg-white dark:bg-black ">
                <div id='open' className=' flex flex-col justify-center h-[70%] normal-case" text-[33px] items-center w-full sm:h-[90%] font-extrabold sm:text-[60px]'>
                   <div className='mt-[50px] sm:mt-0'>
                        <p className=' '>Salut !!!  Je suis   </p>
                        <p className='text-sky-400'> Sekongo Moussa </p>
                        <p>Développeur Web</p>
                   </div>
                    <div className='text-[16px]   sm:text-[25px] mt-[20px] '>
                        <div id='logo'  className=' mb-[20px] w-[100%] h-[60px] flex justify-center items-center gap-5' >
                            <p className=" rounded-full w-[50px] h-[50px] sm:hover:rotate-180 flex justify-center items-center ">
                                <a href="https://github.com/sekongo05/" target="_blank"  className='dark:hidden flex w-[40px] justify-center items-center'> <img src="logo/gb.png" alt="" className='dark:hidden flex w-[30px]'/></a>
                                <a href="https://github.com/sekongo05/" target="_blank"  className='dark:flex hidden w-[40px] justify-center items-center'> <img src="logo/gw.png" alt="" className='dark:flex hidden  w-[30px]'/></a>
                            </p>
                            <p className=" rounded-full w-[50px] h-[50px]  sm:hover:rotate-180 flex justify-center items-center ">
                                <a href=" https://www.linkedin.com/in/sekongo-dev" target="_blank" className='dark:hidden flex w-[40px] justify-center items-center'> <img src="logo/lb.png" alt="" className='dark:hidden flex w-[30px]'/></a>
                                <a href="https://www.linkedin.com/in/sekongo-dev" target="_blank" className='dark:flex hidden w-[40px] justify-center items-center'> <img src="logo/lw.png" alt="" className='dark:flex hidden  w-[30px]'/></a>
                            </p>
                            <p className=" rounded-full w-[50px] h-[50px]  sm:hover:rotate-180 flex justify-center items-center ">
                                <a href="#" target="_blank"  className='dark:hidden flex w-[40px] justify-center items-center'> <img src="logo/tb.png" alt="" className='dark:hidden flex w-[30px]'/></a>
                                <a href="#" target="_blank" className='dark:flex hidden w-[40px] justify-center items-center'> <img src="logo/tw.png" alt="" className='dark:flex hidden  w-[30px]'/></a>
                            </p>
                           
                        </div>
                        <p id='cv' className='flex gap-1 justify-between  items-center cursor-pointer'><a href="images/Mon CV.pdf" download>Télécharger mon CV </a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </p>
                    </div>
                </div>

                <div id='open2' className=" hidden sm:overflow-hidden sm:flex sm:bg-[url('/images/de.png')]  sm:dark:bg-[url('/images/ggi.png')] bg-center bg-cover   w-[90%] h-min overflow-hidden  justify-center items-center sm:h-[100%]">    
                </div>

                <div id='open2' className=' mt-[50px] h-[50%]  w-full flex items-center justify-center sm:hidden'>
                    <p className="dark:bg-[url('/images/ggi.png')] w-[100%] bg-[url('/images/de.png')] bg-[length:500px_500px] bg-no-repeat     bg-center h-[100%] ">
                       
                    </p>
                </div>
            </div>

            
            </>
}


export default Home;