import React from 'react';

class Card extends React.Component {
  constructor (props, context) {
    super(props, context) 
    
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    // console.log(this.imageRef)
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  
  setSpans() {
    console.log(this.imageRef.current.clientHeight)
  }

  render() {
    return <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
  }
}

export default Card;