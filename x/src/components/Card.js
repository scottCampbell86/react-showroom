import React from 'react';

class Card extends React.Component {
  constructor (props, context) {
    super(props, context) 
    
    this.state = { spans: 0 }

    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    // console.log(this.imageRef)
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  
  setSpans() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150 + 1);

    this.setState({ spans: spans })
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
      </div>
    )
  }
}

export default Card;