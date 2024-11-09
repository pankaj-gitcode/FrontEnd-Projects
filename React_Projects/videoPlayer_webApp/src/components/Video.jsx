import React from 'react'
import { useRecoilValue } from 'recoil'
import { videosAtom } from './Atom'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselItem from 'react-bootstrap/CarouselItem';
// import CarouselCaption from 'react-bootstrap/CarouselCaption'
import AllVideos from './AllVideos';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Video(){
   const videos = useRecoilValue(videosAtom);
   useGSAP(()=>{
    gsap.fromTo('#video', {
        scale:0
    }, {
        scale: 2,

    })
    
   }, [])

    return(<>
        <div className='w-full h-screen bg-slate-500'>
            <div className='h-full flex items-center justify-center'>
                <div className='flex gap-10 scroll-mx-20'>
                    {/* --------------- video carousel -------------- */}
 
                        {/* <Carousel className='w-56 '>
                            <Carousel.Item interval={1000}>
                                <img src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </Carousel.Item>

                        </Carousel>  */}

                        <Carousel>
                            {
                                videos.map((e,i)=>(
                                    <Carousel.Item key={i}>
                                        <video autoPlay muted id='video'>
                                            <source src={e} type='video/mp4'/>
                                        </video>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>                           
                
                </div>
            </div>

        </div>
    </>)
}