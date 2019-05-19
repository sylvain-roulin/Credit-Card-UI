import React from 'react';
import FormUI from './components/FormUI';
import './css/styles.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="container">
          <FormUI />
      </div>
    )
  }
}

export default App;
