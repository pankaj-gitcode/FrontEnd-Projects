import Spline from '@splinetool/react-spline'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { projectAtom} from '../atom/Atom'

export const Page3Projects = () => {
    const projectAssets = useRecoilValue(projectAtom);
    console.log('Project Title: ', projectAssets);
  return (<>

  <div className='relative w-full h-full'>

        {/* ----- ROBOT SECTION ----- */}
        <div>
            <Spline scene="https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode" />
        </div>

        {/* ----- PROJECT SECTION ----- */}
        <div className='absolute w-full top-[60%] sm:top-[80%]'>
        {
            projectAssets.map((el,i)=>
            <div key={el.projectId} className='bg-[#E3E3E3] text-black font-[font5]
            '>

                     {/* ----- PROJECT-CONTAINER ----- */}
                {
                    <div className={`flex items-center justify-between 
                        ${el.projectId % 2 === 0? 'flex-row-reverse': '' }`}>
                                {/* ----- PROJECT-TITLE ----- */}
                            <div className='text-[20vw] sm:text-[10vw]'>
                                <h1>{el.projectTitle}</h1>
                            </div>

                                {/* ----- PROJECT-LINKS ----- */}
                            <div className='flex flex-col'>
                                
                                <a href={el.gitHubLink} target='_blank'>Git-Link</a>
                                <a href={el.webLink}>Web-Link</a>
                            </div>
                    
                    </div>
                }
                <hr className='bg-black h-1'/>
            </div>
            )
        }
        </div>
           
    
 </div>
  </>
  )
}
