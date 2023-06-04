import React, { useEffect, useState } from "react";
import { database } from "../database/data";
import Card from "./Card";

const Main = ({ search }) => {
  const [data, setData] = useState(database);
  const [filteredData, setFilteredData] = useState([]);

  // dropdown
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleDropdownChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);     
  };
  
  useEffect(()=>{
    setFilteredData(data)
  },[])

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  
    if (JSON.stringify(filteredData) !== JSON.stringify(data)) {
      setFilteredData(filteredData);
    }
  }, [data, search]);

  const alphabets = [
    {id:'a', text: 'A'},
    {id:'b', text: 'B'},
    {id:'c', text: 'C'},
    {id:'d', text: 'D'},
    {id:'e', text: 'E'},
    {id:'f', text: 'F'},
    {id:'g', text: 'G'},
    {id:'h', text: 'H'},
    {id:'i', text: 'I'},
    {id:'j', text: 'J'},
    {id:'k', text: 'K'},
    {id:'l', text: 'L'},
    {id:'m', text: 'M'},
    {id:'n', text: 'N'},
    {id:'o', text: 'O'},
    {id:'p', text: 'P'},
    {id:'q', text: 'Q'},
    {id:'r', text: 'R'},
    {id:'s', text: 'S'},
    {id:'t', text: 'T'},
    {id:'u', text: 'U'},
    {id:'v', text: 'V'},
    {id:'w', text: 'W'},
    {id:'x', text: 'X'},
    {id:'y', text: 'Y'},
    {id:'z', text: 'Z'}
  ]

  const sortBy = [
    {id:1, text: "MOST USED"}
  ]

  useEffect(() => {
    const getFilteredItems = (query) =>
      data.filter((item) => item.title.toLowerCase().indexOf(query) === 0);
    const filteredItems = getFilteredItems(selectedValue);
  
    if (JSON.stringify(filteredItems) !== JSON.stringify(data)) {
      setFilteredData(filteredItems);
    }
  }, [data, selectedValue]);

  // sort by
  const handleSortChange = () => {
    const getSortedItems = () => filteredData.sort((a, b) => a.downloadCount < b.downloadCount ? 1 : -1);
    const res = getSortedItems();
    console.log(res)
  }
  // console.log('rendering')

  return (
    <div className="main">
      <div className="hero">
        <h1>Glossary</h1>
      </div>
      <div className="content">
        <div className="filter">
          <div>
            <h4>ALPHABETICALLY</h4>
            <select value={selectedValue} onChange={handleDropdownChange} className="dropdown">
              {alphabets.map((item)=>(
                <option key={item.id} value={item.id}>{item.text}</option>
              ))}
            </select>
            
          </div>
          <div>
          <h4>SORT BY</h4>
            <select value={selectedValue} onChange={handleSortChange} className="dropdown">
              {sortBy.map((item)=>(
                <option key={item.id} value={item.id}>{item.text}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="glossary">
          {filteredData.map((item) => (
            <Card key={item.id} details={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
