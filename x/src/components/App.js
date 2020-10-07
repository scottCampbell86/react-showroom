import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  async onSearchSubmit(term) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 1ukgpv-8ju2FjFZfOHqlL6gN_KEG2vrOyncYDOx9J_g'
      }
    });
    console.log(res.data.results);
  }

  render () {    
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;