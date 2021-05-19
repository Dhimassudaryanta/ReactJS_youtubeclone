import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui primary menu">

        <a href="/" className="item"> <i className="youtube icon"></i> Youtube</a>

        <div className="right menu">
          <div className="item">
            <form onSubmit={this.onFormSubmit}>
              <div className="ui transparent icon input">

                <input

                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  placeholder="Search..."
                />
                <i className="search link icon" onClick={this.onFormSubmit}></i>

              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchBar;
