
import './Propos.css';
let Propos = ()=>{



    return <>
                <div id='propos' className='h-[100px] bg-white dark:bg-black'></div>
                <div className='h-[100px]  w-[100%] text-black dark:text-white flex justify-center items-center sm:mb-[-100px] bg-white dark:bg-black'>
                    <p className='text-[35px] font-extrabold capitalize text-sky-400'>à Propos de moi</p>
                </div>
            <div  className=' h-[100vh] w-[100%]  font-mono flex flex-col  sm:flex-row bg-white dark:bg-black text-black dark:text-white'>
                <div className=' w-full h-[50%] flex justify-center items-center sm:h-[100%]'> 
                    <p id='open' className='flex justify-center text-[18px] text-center items-center w-[90%] sm:pl-15 sm:text-[25px]'>
                        🧑‍💻Développeur web & designer graphique passionné par l’innovation digitale et l’esthétique interactive, je conçois des sites web modernes, des applications dynamiques et des supports visuels destinés à la communication digitale et imprimée.
                        Mon approche combine technologies de pointe et design intuitif pour créer des expériences numériques performantes, visuellement captivantes et adaptées aux réalités locales. Chaque projet est pensé pour allier fonctionnalité, créativité et impact visuel, au service d’une identité forte et cohérente.
                    </p>

                </div>
                <div id='open2'  className='w-full  h-[70%] flex justify-center items-center sm:h-[100%]'>
                    <p  id='sh' className=' rounded-full flex justify-center items-center w-[250px] h-[250px] sm:w-[500px] bg-white dark:bg-black sm:h-[500px] overflow-hidden'>
                        <img src="images/im.jpg" alt="" className='hidden dark:flex' />
                        <img src="images/imw.jpg" alt="" className='dark:hidden flex' />
                    </p>
                </div>
            </div>
             
            
            </>
}


export default Propos;