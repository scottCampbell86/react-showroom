import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { images: [] };
    
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  

  async onSearchSubmit(term) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 1ukgpv-8ju2FjFZfOHqlL6gN_KEG2vrOyncYDOx9J_g'
      }
    });
    this.setState({ images: res.data.results})
  }

  render () {    
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;