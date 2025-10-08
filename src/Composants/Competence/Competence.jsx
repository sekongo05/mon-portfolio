import './Competence.css';

let Competence = ()=>{



    return <>
            <div id='compet' className=' h-[100px]  bg-white dark:bg-black'></div>
            <div  className='w-[100%] h-min sm:h-[min] flex flex-col  border-yellow-300 '>
                <div className='h-[100px] sm:h-[150px]  border-green-700 w-[100%] text-black dark:text-white flex justify-center items-center bg-white dark:bg-black'>
                    <p className='text-[35px] font-extrabold capitalize text-sky-400'> Compétences</p>
                </div>
                <div className='gap-4 hidden border-red-500 w-full h-min sm:flex flex-col items-center text-black dark:text-white  bg-white dark:bg-black '>
                    <div  className=' mb-[20px] text-[25px]  font-semibold capitalize bg-white flex justify-center items-center text-black dark:text-white  dark:bg-black'>
                        <p > Développement Web</p>
                    </div>
                    <div className=' mb-[20px]  w-full h-1/2 flex justify-between items-center sm:w-[90%] '>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/h.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Html</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/c.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'>CSS</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                            <p className=" h-[200px] bg-[url('/logo/j.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'>JavaScript</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                            <p className=" h-[200px] bg-[url('/logo/r.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> React Js</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/p.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'>Php</p>  
                        </p>
                        
                    </div>
                    <div className='  w-full h-1/2 flex justify-between items-center sm:w-[80%]'>
                       
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/n.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'>Node Js</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/sq.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> SQL</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/eb.png')] dark:bg-[url('/logo/ew.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'>Express Js</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                             <p className=" h-[200px] bg-[url('/logo/t.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Tailwindcss</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo '>
                            <p className=" h-[200px] bg-[url('/logo/g.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Git</p>  
                        </p>
                       
                       
                    </div>
                    <div  className='h-[100px] text-[25px]  font-semibold capitalize bg-white flex justify-center items-center text-black dark:text-white  dark:bg-black'>
                        <p >  Web design </p>
                    </div>
                    <div className=' h-1/2 flex justify-between items-center sm:w-[80%]'>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                            <p className=" h-[200px] bg-[url('/logo/i.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Illustrator</p>  
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                             <p className=" h-[200px] bg-[url('/logo/ph.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Photoshop</p>   
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                            <p className=" h-[200px] bg-[url('/logo/ca.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Canva</p>   
                        </p>
                        <p className='w-[200px] h-[250px]  flex flex-col logo'>
                           <p className=" h-[200px] bg-[url('/logo/f.png')] bg-center bg-no-repeat bg-[length:150px_150px]"></p>
                            <p className=' h-[50px] flex justify-center font-mono items-center text-[25px]'> Figma</p> 
                        </p>
                       
                        
                    </div>

                </div>
                <div className="sm:hidden border-red-500 w-full h-min  flex-col items-center text-black dark:text-white  bg-white dark:bg-black ">
                    <div  className=' mb-[20px] text-[25px]  font-semibold capitalize bg-white flex justify-center items-center text-black dark:text-white  dark:bg-black'>
                        <p > Développement Web</p>
                    </div>
                        <div className=' mb-[20px]  w-[100%] p-7 h-min flex justify-center gap-8 items-center '>
                            <p className='w-[45%]  h-[150px] flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/h.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Html</p>  
                            </p>
                            <p className='w-[45%]  h-[150px]  flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/c.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'>CSS</p>  
                            </p>
                        </div>
                        <div className=' mb-[20px]  w-[100%] p-7 h-min flex justify-center gap-8 items-center '>
                            <p className='w-[45%]  h-[150px]  flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/j.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> JavaScript</p>  
                            </p>
                            <p className='w-[45%]  h-[150px] flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/r.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'>React Js</p>  
                            </p>
                        </div>
                        <div className=' mb-[20px]  w-[100%] p-7 h-min flex justify-center gap-8 items-center '>
                            <p className='w-[45%]  h-[150px]  flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/p.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Php</p>  
                            </p>
                            <p className='w-[45%] h-[150px]  flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/n.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'>Node Js</p>  
                            </p>
                        </div>
                        <div className=' mb-[20px] p-7 w-[100%] h-min flex justify-center gap-8 items-center '>
                            <p className='w-[45%] h-[150px]   flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/eb.png')] dark:bg-[url('/logo/ew.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'>Express Js</p> 
                            </p>
                            <p className='w-[45%] h-[150px]   flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/sq.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> SQL</p>  
                            </p>
                        </div>
                        <div className=' mb-[20px] p-7 w-[100%] h-min flex justify-center gap-8 items-center '>
                            <p className='w-[45%] h-[150px]   flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/g.png')] dark:bg-[url('/logo/ew.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'>Git</p> 
                            </p>
                            <p className='w-[45%] h-[150px]   flex flex-col logo '>
                                <p className=" h-[100px] bg-[url('/logo/t.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Tailwindcss</p>  
                            </p>
                        </div>
                        <div  className='h-[100px] text-[25px]  font-semibold capitalize bg-white flex justify-center items-center text-black dark:text-white  dark:bg-black'>
                            <p >  Web design </p>
                        </div>
                         <div className=' mb-[20px] p-7 w-[100%] h-min flex justify-center gap-8 items-center '>
                            <p className='w-[200px] h-[150px]  flex flex-col logo'>
                                <p className=" h-[100px] bg-[url('/logo/i.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Illustrator</p>  
                            </p>
                            <p className='w-[200px] h-[150px]  flex flex-col logo'>
                                <p className=" h-[100px] bg-[url('/logo/ph.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Photoshop</p>  
                            </p>
                        </div>
                         <div className=' mb-[20px] p-7 w-[100%] h-min flex justify-center gap-8 items-center '>
                            <p className='w-[200px] h-[150px]  flex flex-col logo'>
                                <p className=" h-[100px] bg-[url('/logo/ca.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Canva</p>  
                            </p>
                            <p className='w-[200px] h-[150px]  flex flex-col logo'>
                                <p className=" h-[100px] bg-[url('/logo/f.png')] bg-center bg-no-repeat bg-[length:100px_100px]"></p>
                                <p className=' h-[50px] flex justify-center font-mono items-center text-[18px] sm:text-[20px]'> Figma</p>  
                            </p>
                        </div>

                </div>
            </div>
            
            </>
}


export default Competence;