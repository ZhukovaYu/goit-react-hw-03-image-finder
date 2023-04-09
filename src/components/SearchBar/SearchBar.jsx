import { Component } from "react";
import '../SearchBar/SearchBar.css';

export class SearchBar extends Component {
    state = {
        query: "",
    }

    handleInput = (event) => {
        this.setState({query: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { query } = this.state;
        if (!query) {
            alert('Please enter search value')
            return
        }
        this.props.onSubmit(query);
        this.setState({ query: "" });
    }

    render () {
        return (
        <>
        <div className="Container">
        <h1> What are you looking for? </h1>    
        <form onSubmit={this.handleSubmit}>

        <input
            onChange={this.handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
        />
        <button type="submit"> Search </button>
        </form>
                    
        </div>
        </>
        )
    }
}