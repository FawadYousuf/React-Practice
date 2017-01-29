var inputText = React.createClass({

  propTypes: {
    text: React.PropTypes.string,
  },

  getInitialState: function () {
    return {
      text: this.props.text,
    };
  },

  textChange: function (ev) {
    this.setState({
      text: ev.target.value,
    });
  },

 render: function () {
    return React.DOM.div(null,
      React.DOM.input({
        value: this.state.text,
        onChange: this.textChange,
      }),
      React.DOM.h2(null, this.state.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(inputText, {
    text : 'bob'
  }),
  document.getElementById('text')
);