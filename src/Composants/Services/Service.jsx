
import './Service.css';
let Service = ()=>{



    return <>
             <div id='services' className=' h-[80px]  sm:h-[60px]   bg-white dark:bg-black'></div>
            <div className='h-min sm:h-[100vh] bg-white dark:bg-black dark:text-white text-black'>
                <div className='h-[100px] sm:h-[150px]  border-green-700 w-[100%] text-black dark:text-white flex justify-center items-center bg-white dark:bg-black'>
                    <p className='text-[35px] font-extrabold capitalize text-sky-400'>Mes Services</p>
                </div>
                <div className='flex flex-col   w-full mt-[80px]  sm:mt-0  gap-20 sm:gap-40 justify-center items-center h-min sm:h-[80vh]  bg-white dark:bg-black      sm:flex-row'>
                    <div id='serv' className=' w-[60%] h-[400px] flex flex-col justify-center items-center sm:hover:scale-110 transition  duration-300 ease-in-out  rounded-[16px] sm:w-[300px] sm:h-[400px] '>
                        <p className="h-[30%] w-full  flex justify-center items-center  bg-[url('/logo/co.png')] bg-center bg-no-repeat  bg-[length:100px_100px]"></p>
                        <p  className='h-[20%] w-full    flex justify-center items-center text-[25px]' >Développement Web</p>
                        <p  className='h-[50%]  w-full p-2   flex justify-center items-center text-center'>Chez Sekongo Dev, je crée des interfaces web fluides et épurées, alliant design soigné et performance technique. Du front-end réactif au backend sécurisé, chaque projet est pensé pour offrir une expérience intuitive et valoriser votre image.</p>
                    </div>
                    <div id='serv' className='  w-[60%] h-[400px] rounded-[16px] sm:w-[300px] sm:h-[400px] sm:hover:scale-110 transition  duration-300 ease-in-out'>
                        <p className="h-[30%] w-full  flex justify-center items-center  bg-[url('/logo/ui.png')] bg-center bg-no-repeat  bg-[length:100px_100px]"></p>
                        <p  className='h-[20%] w-full    flex justify-center items-center text-[25px]'>Web Designer</p>
                        <p  className='h-[50%]  w-full p-2 text-center  flex justify-center items-center'>Je transforme les idées en interfaces visuelles fluides et captivantes. Chaque design — site web, contenu digital ou support imprimé — est pensé pour séduire, informer et incarner l’identité du projet.</p>
                    </div>
                    
                </div>

            </div>
            
            
            </>
}


export default Service;