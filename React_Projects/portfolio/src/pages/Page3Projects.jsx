import Spline from '@splinetool/react-spline'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { projectAtom} from '../atom/Atom'

export const Page3Projects = () => {
    const projectAssets = useRecoilValue(projectAtom);
    console.log('Project Title: ', projectAssets);
  return (<>

    {/* ----- ROBOT + PROJECT DIV ----- */}
    <div className='relative'>
        <Spline scene="https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode" />

        {/* ----- PROJECT SECTION ----- */}
        {
            projectAssets.map((el,i)=>
            <div key={el.projectId} className='bg-blue-500'>
                {
                    <div className={`flex items-center justify-between 
                    ${el.projectId % 2 === 0? 'flex-row-reverse': '' }`}>
                        <div>
                            <h1>{el.projectTitle}</h1>
                        </div>

                        <div className='flex flex-col'>
                            <a href="">{el.gitHubLink}</a>
                            <a href="">{el.webLink}</a>
                        </div>
                    </div>
                }
            </div>
            )
        }
           
    </div>

  </>
  )
}


// {
//     projectAssets.map((el, i)=>
// <div className='bg-blue-500 ' key={el.projectId} >{
//  el.projectId%2===0?
//         <div>
//             <div>
//                 <a href="">{el.gitHubLink}</a>
//                 <a href="">{el.webLink}</a>
//             </div>
//             <h1>{el.projectTitle}</h1>
//         </div>
//         :
//         <div>
//             <h1>{el.projectTitle}</h1>
//             <div>
//                 <a href="">{el.gitHubLink}</a>
//                 <a href="">{el.webLink}</a>
//             </div>
//         </div>
        
// }</div>
//     )
//    }