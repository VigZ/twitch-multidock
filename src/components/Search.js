import React from 'react'
import { connect } from 'react-redux'



class Search extends React.Component {
  state = {
    searchTerm:""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchStreamInfo(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }


  render() {

     return(
       <div className="searchContainer">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <span><input type="text" value={this.state.searchTerm} className="search rounded" placeholder="Search for users..." ></input></span>
          </form>
       </div>
        )
      }
}

export default Search
