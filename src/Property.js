import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data.json';
import Card from './Card';
function Property() {
    const {id} = useParams();
    const currAdv = data[id];
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        
    <Card id={currAdv.id} 
    image={currAdv.image}
                title={currAdv.title}
                location={currAdv.location}
                purpose={currAdv.Purpose}
                address={currAdv.address}
                room={currAdv.room}
                bed={currAdv.bed}
                bath={currAdv.bath}
                sft={currAdv.sft}
                price={currAdv.price}/>
    </div>
  )
}

export default Property