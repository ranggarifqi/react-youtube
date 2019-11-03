import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  };

  onChangeText = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Cari Video</label>
            <input type="text" value={this.state.term} onChange={this.onChangeText} placeholder="cth: 'Me At the Zoo'" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;