import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleInputChange.bind(this)}
        />
        <button
          className="btn hidden-sm-down"
          onClick={(() =>
            this.props.handleSearchInputChange(this.state.value)).bind(this)}
        >
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

export default Search;
