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

class Legacy extends Component {
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

Legacy.propTypes = {
  name: PropTypes.string.isRequired
};

Legacy.contextTypes = {
  api: PropTypes.string
};

class Context extends Component {
  getChildContext() {
    return {
      api: 'legacy api that will not be supported in future...'
    };
  }

  render() {
    return (
      <ExampleContext.Provider
        value={{ api: 'new api that will be supported in future...' }}>
        <Legacy name='John Galt' />
        <New name='John Galt' />
      </ExampleContext.Provider>
    );
  }
}

Context.childContextTypes = {
  api: PropTypes.string
};

export default Context;
