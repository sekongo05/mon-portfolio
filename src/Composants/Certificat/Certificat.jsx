import './Certificat.css'
let Certificat = () =>{



    return <>
            <div id='certif' className=' h-[100px]  bg-white dark:bg-black'></div>
            <div className='h-full bg-white overflow-hidden dark:bg-black text-black dark:text-white'>
                <div data-aos="zoom-in-left" className='h-[100px] sm:h-[150px]  border-green-700 w-[100%] text-black dark:text-white flex justify-center items-center bg-white dark:bg-black'>
                    <p className='text-[35px] font-extrabold capitalize text-sky-400'>Mes Certificats</p>
                </div>
                <div data-aos="zoom-in-left" className='flex flex-col font-bold p-2  w-full mt-[80px]  sm:mt-0  gap-20 sm:gap-40 justify-center items-center h-min sm:h-[80vh]  bg-white dark:bg-black      sm:flex-row'>
                    <div id='serv' className=' w-[80%] h-[300px] flex flex-col justify-center items-center      rounded-[16px] sm:w-[300px] sm:h-[400px] '>
                        <p className="h-[60%] w-full rounded-t-[16px] flex justify-center items-center  overflow-hidden ">
                            <img src="images/certif_react_js.jpg" alt="certificat react js" className='w-[100%] h-[100%]'/>
                        </p>
                        <p  className='h-[20%] w-full text-[18px]   flex justify-center items-center sm:text-[25px]' >Certificat React JS</p>
                        <p className="h-[20%] w-[50%]   flex justify-center items-center" >
                            <a href="/images/certif_react_js.jpg"  target="_blank" rel="noopener noreferrer"><img src="logo/link.png" alt="lien" className='w-[50px]' /> </a>
                        </p>
                    </div>
                    
                    <div  id='serv' className='  w-[80%] h-[300px] flex flex-col justify-center items-center rounded-[16px] sm:w-[300px] sm:h-[400px] ease-in-out'>
                        <p className="h-[60%] w-full  flex  rounded-t-[16px] justify-center overflow-hidden  items-center ">
                            <img src="images/certif_hacking.jpg" alt="certificat hacking étique" className='w-[100%] h-[100%]' />
                        </p>
                        <p  className='h-[20%] w-full   text-[17px] flex justify-center items-center sm:text-[25px]' >Certificat Hacking Étique</p>
                        <p className="h-[20%] w-[50%]   flex justify-center items-center" >
                            <a href="/images/certif_hacking.jpg"  target="_blank" rel="noopener noreferrer"><img src="logo/link.png" alt="lien" className='w-[50px]' /> </a>
                        </p>  
                    
                    </div>
                    
                </div>

            </div>
           </>

}


export default Certificat;