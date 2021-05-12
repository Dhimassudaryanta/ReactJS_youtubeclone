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
      <div style={{ marginBottom: 20, }}>
        <form onSubmit={this.onFormSubmit} className="">
          <div className="ui pointing menu">
            <a href="/" class="item">
              Youtube
            </a>
            <div className="right menu">
              <div class="item">
                <div class="ui icon input">
                  <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Search...."
                  />
                  <i onClick={this.onFormSubmit} class="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
        </form >
      </div>
    );
  }
}

export default SearchBar;
