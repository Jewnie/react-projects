import React from 'react';

const Menu = ({menuItems}) => {
  return <div style={{display:"flex", flexWrap:"wrap", width:"80%", margin:"20px auto", justifyContent:"space-evenly" , gap:"20px"}}>
    {menuItems.map((item)=>{
      return (
        <div style={{width:"300px", display:"flex", flexDirection:"column"}} key={item.id}>
          <img style={{width:"200px", height:"150px", objectFit:"cover"}} src={item.img}/>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <h4>{item.category}</h4>
          <h5>{item.price}€</h5>
        </div>
      )
    })}
  </div>;
};

export default Menu;
