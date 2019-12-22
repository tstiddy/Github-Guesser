import React from 'react';
import SearchBar from '../components/SearchBar';
import API from '../adapters/API';

class Main extends React.Component {

    state = {
        searchTerm: '',
        users: [],
        hidden: true
    }

    searchInput = (e) => {
        this.setState({ searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({users: [] })
        API.getUser(this.state.searchTerm)
            .then((data) => this.setState({users: data.map(item => ({ //setting the languages as state
                language: item.language})
                )}
            ))
        this.setState({hidden: false})
    }

    render() {
        let languages = {...this.state.users}
        return (
            <div>
                <SearchBar searchState={this.state.searchTerm} searchInput={this.searchInput} handleSubmit={this.handleSubmit} languages={languages} hidden={this.state.hidden}/>
            </div>
        )
    }

}

export default Main