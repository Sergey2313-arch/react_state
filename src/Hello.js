import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello from Class',
    };
  }

  translate = () => {
    this.setState({
      text: this.state.text === 'Hello from Class'
        ? 'Привет из класса'
        : 'Hello from Class',
    });
  };

  render() {
    return (
      <div className="block">
        <h1>{this.state.text}</h1>
        <button onClick={this.translate}>Перевести</button>
      </div>
    );
  }
}

export default Hello;
