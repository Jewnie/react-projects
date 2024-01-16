import React from 'react';
import data from "./data"

const Categories = ({setMenuItems,menuItems}) => {
  const types = ["all",...new Set(data.map((item)=> item.category))]
  console.log(types);

  const handleFilter = (category) =>{
    if(category==="all"){
      setMenuItems(data)
      return
    }
    const newMenu = data.filter((item)=> item.category === category)
    setMenuItems(newMenu)
  }

  return <div style={{width:"500px", margin:"40px auto"}}>
    <ul style={{display:"flex", width:"100%", justifyContent:"space-evenly"}}>
      {types.map((item,index)=>{
        return <li key={index}><button className='filter-btn' onClick={()=>handleFilter(item)}>{item}</button></li>
      })}
      
    </ul>
  </div>;
};

export default Categories;
