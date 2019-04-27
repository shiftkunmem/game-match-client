import * as React from 'react';
import './App.css';

class App extends React.Component <{}, { data: string | [], apiUrl: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {data: [], apiUrl: 'https://api.game-match.net/user'};
  }

  public componentDidMount() {
    fetch(this.state.apiUrl)
      .then(res => res.json())
      .then(resJson => this.setState({data: resJson.user.toString()}))
      .catch((error) => console.error(error))
  }

  public render() {
    return (
      <div className="App">
        {this.state.data}
      </div>
    );
  }
}

export default App;
