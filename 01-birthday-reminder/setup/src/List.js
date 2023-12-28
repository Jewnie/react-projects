import React, { useState } from 'react';
import data from "./data"

const List = () => {

  const [people, setPeople] = useState(data)
  const handleClear = () => {
    if (people.length < 1) {
      setPeople(data)
      return;
    }
    setPeople([])
  }
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%" }} src={person.image} />
            <h3>{person.name}</h3>
            <h4>{person.age}</h4>
            <button onClick={handleRemove(person.id)}>Remove</button>
          </div>
        )
      })}
      {people.length > 0 ? <button onClick={handleClear}>Clear List</button> : <button onClick={handleClear}>Reset</button>}

    </>
  );
};

export default List;
