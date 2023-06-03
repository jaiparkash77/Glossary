import React, { useState } from 'react'
import {database} from '../database/data'
import Card from './Card'

const Main = () => {
  const [data,setData] = useState(database);
  return (
    <div className='main'>
      <div className='hero'>
        <h1>Glossary</h1>
      </div>
      <div className='content'>
        <div className='filter'>
          <div>left</div>
          <div>right</div>
        </div>
        <div className='glossary'>
          {
            data.map((item)=>(
              <Card key={item.id} details={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Main