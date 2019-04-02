import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const ExampleContext = createContext({ api: 'lorem ipsum' });
class New extends Component {
  static contextType = ExampleContext;
  render() {
    const { name } = this.props;
    const { api } = this.context;
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>
          This example is using{' '}
          <span style={{ fontStyle: 'italic', color: 'green' }}>{api}</span>
        </p>
      </div>
    );
  }
}

New.propTypes = {
  name: PropTypes.string.isRequired
};

const Context = () => (
  <ExampleContext.Provider
    value={{ api: 'new api that will be supported in future...' }}>
    <New name='John Galt' />
  </ExampleContext.Provider>
);

export default Context;
