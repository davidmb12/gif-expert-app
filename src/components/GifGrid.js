import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:imgs,loading}= useFetchGifs(category);
    // const [images, setImages] = useState([]);
    

    


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    imgs.map((img)=> (
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
  )
}
