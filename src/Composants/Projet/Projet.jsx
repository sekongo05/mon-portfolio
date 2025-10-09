
import './Projet.css';
let Projet = ()=>{



    return <>
            <div id='projet' className=' h-[100px]   bg-white dark:bg-black'></div>
            <div  className='h-full bg-white dark:bg-black text-black dark:text-white overflow-hidden'>
                <div data-aos="fade-right"  data-aos-offset="300" data-aos-easing="ease-in-sine" className='h-[100px] sm:h-[150px]  border-green-700 w-[100%] text-black dark:text-white flex justify-center items-center bg-white dark:bg-black'>
                    <p className='text-[35px] font-extrabold capitalize text-sky-400'>Mes Projets </p>
                </div>
                <div   data-aos-easing="ease-in-sine" className='flex flex-col p-2   w-full mt-[80px]  sm:mt-[-60px]  gap-20 sm:gap-40 justify-center items-center h-min sm:h-[80vh]  bg-white dark:bg-black      sm:flex-row'>
            
                    
                     <div  data-aos="fade-right"  data-aos-offset="300" id='serv' className=' w-[80%] h-[300px] flex flex-col justify-center items-center      rounded-[16px] sm:w-[300px] sm:h-[400px] '>
                        <p className="h-[50%] w-full rounded-t-[16px] flex justify-center items-center  overflow-hidden ">
                            <img src="images/p2.jpeg" alt="" className='w-[100%] h-[100%]'/>
                        </p>
                        <p  className='h-[30%] w-[95%]    flex justify-center items-center text-[18px] text-center sm:text-[25px]' >Site Web moderne pour la recherche de résidences meublées</p>
                        <p className="h-[20%] w-[50%]   flex justify-center items-center" >
                            <a href="https://residence-site-web.vercel.app/" target="_blank" ><img src="logo/link.png" alt="lien" className='w-[50px]' /> </a>
                        </p>
                    </div>

                    <div  data-aos="fade-left"  data-aos-offset="300" id='serv' className=' overflow-hidden w-[80%] h-[300px] flex flex-col justify-center items-center rounded-[16px] sm:w-[300px] sm:h-[400px] ease-in-out'>
                        <p className="h-[50%] w-full  flex  rounded-t-[16px] justify-center overflow-hidden  items-center ">
                            <img src="images/c.jpeg" alt="certificat hacking étique" className='w-[100%] h-[100%]' />
                        </p>
                        <p  className='h-[30%] w-[95%]    flex justify-center items-center text-[18px] sm:text-[25px]' >Site de vente de café</p>
                        <p className="h-[20%] w-[50%]   flex justify-center items-center" >
                            <a href="https://sekongo05.github.io/Work_/" target="_blank" ><img src="logo/link.png" alt="lien" className='w-[50px]' /> </a>
                        </p>  
                    
                    </div>
                    
                </div>
            </div>
            
            </>
}


export default Projet;