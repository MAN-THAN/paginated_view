import React, { useState, useEffect } from "react";
import { data } from "./data";

const SearchCompo = () => {
  const [show, setShow] = useState(data);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const handleClick = (item) => {
    if(selected.map((ele) => ele.name).includes(item.name)) return;
    setSelected([...selected, {name : item.name}]);
  };
  const handleSelected = (name) => {
    const filteredItem = selected.filter((ele) => ele.name !== name);
    setSelected(filteredItem);
  };
  const handleSearch = () => {
    const filter = data.filter((item) => item.name.startsWith(input) || item.email.startsWith(input));
    setShow(filter);
  }
  const handleBackSpace = () => {
    if(input === ''){
        const selectedItem = selected;
        selectedItem.pop();
        setSelected(selectedItem);
    }
  }
  useEffect(() => {
    document.addEventListener('backSpace', handleBackSpace);
    
  }, [])

  return (
    <div className="main">
      <div style={{display: 'flex'}}>
        <input value={input} name='search' onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSearch}>Filter</button>
        <div style={{border : '2px solid black', minWidth : '10em', minHeight : '1em', marginLeft : '1em', display : 'flex', gap : '5px'}}>{selected?.map((ele, ind) => <h5 onClick={() => handleSelected(ele.name)} style={{border : '1px solid black'}}>{ele.name}</h5> )}</div>
      </div>
      <div>
        <ul style={{listStyleType : 'none'}}>
          {show?.map((ele, ind) => (
            <li key={ind}><button onClick={() => handleClick(ele)}>{ele.name + "||" + ele.email}</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCompo;
