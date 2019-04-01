import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Legacy extends Component {
  render() {
    const { name } = this.props;
    const { api } = this.context;
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>
          This example is using{' '}
          <span style={{ fontStyle: 'italic', color: 'green' }}>
            {this.context.api}
          </span>
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
    return <Legacy name='John Galt' />;
  }
}

Context.childContextTypes = {
  api: PropTypes.string
};

export default Context;
