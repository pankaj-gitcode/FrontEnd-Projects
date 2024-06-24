import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { APIDataAtom } from './Atom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function FoodAPI(){

    const [fetchedData, setFetchedData] = useRecoilState(APIDataAtom);
    const [count, setCount] = useState(0);

    const leftBtn = ()=>setCount(count=>count+1)
    const rightBtn = ()=>setCount(count=>count-1)

    console.log('L: ', count, 'R: ', count)

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>setFetchedData(res.data.meals[0]))
        .catch(err=>console.log(`ERROR=> ${err}`))
    }, [count])

    return(<>
        <img src={fetchedData.strMealThumb} alt="" className='w-full h-full object-cover rounded-lg'/>

        <div className='flex items justify-center relative'>
            <button className='rounded-full p-1 bg-orange-600' onClick={leftBtn}>
                <BsChevronCompactLeft size={20}/>
            </button>
            <button className='p-1 rounded-full bg-orange-600 ' onClick={rightBtn}>
                <BsChevronCompactRight size={20} />
            </button>
            {/* <button className='rounded-full p-1 bg-orange-600 translate-x-2 translate-y-[-700%]' onClick={leftBtn}>
                <BsChevronCompactLeft size={20}/>
            </button>
            <button className='p-1 rounded-full bg-orange-600 translate-y-[-700%] -translate-x-2' onClick={rightBtn}>
                <BsChevronCompactRight size={20} />
            </button> */}
        </div>
    </>
    )
}