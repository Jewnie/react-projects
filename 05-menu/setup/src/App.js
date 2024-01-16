import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';

import menu from './data';

function App() {

  const [menuItems, setMenuItems] = useState(menu)
  const [categories,setCategories] = useState([])
  


  return <div>
    <h1 style={{ margin: " 10px auto" }}>Menu</h1>
    <Categories menuItems={menuItems} setMenuItems={setMenuItems} />
    <Menu menuItems={menuItems} setMenuItems={setMenuItems}/>
  </div>;
}

export default App;
