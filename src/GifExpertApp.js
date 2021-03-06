import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'animate.css'; 

const GifExpertApp=()=> {

  const [categories, setCategories] =  useState(['Bob Esponja']);
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories ={setCategories}/>
      <hr></hr>
      
      <ol>
        {
          categories.map( (category)=> (
            <GifGrid 
              key={category}
              category={category}
            />
            )
          )
        }
      </ol>
      
    </>
    
  )
}

export default GifExpertApp;