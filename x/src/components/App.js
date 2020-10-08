import React from 'react';
import unsplashAxios from '../api/unsplashAxios'
import SearchBar from './SearchBar';


class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  
  async onSearchSubmit(term) {
    const res = await unsplashAxios.get('/search/photos', {
      params: {query: term}
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