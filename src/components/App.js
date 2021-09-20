import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: []};

    onUserSubmit = async (searchTerm) =>{
        const response = await unsplash.get('/search/photos/', {
            params: { query: searchTerm }
        });
        
        this.setState({images: response.data.results}); 
    }
    
    
    render(){
        //console.log(this.state.jsonData)
        return (
            <div className='ui container' style={{ marginTop:'10px'}}>
                <SearchBar runMeWhenUserSubmits={this.onUserSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

    


export default App;