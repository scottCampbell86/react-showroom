import React from 'react';
import './ImageList.css';
import Card from './Card'; 

const ImageList = (props) => {

  const images = props.images.map(image => {
    return <Card key={image.id} image={image} />
  })

  return <div className='image-list'>
    <div>{ images }</div>
    </div>
}

export default ImageList;