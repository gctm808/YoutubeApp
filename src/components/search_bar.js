import React, { Component } from 'react'

//Create SearchBar component
class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {term: ''}
    }

    //when searchbar value changes, set state to that
    render() {
        return(
            <div>
                <input 
                value = {this.state.term}
                onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar