import React from 'react';
import {connect} from 'react-redux';
import '../shared/reset.css';
import {wrapper, container} from '../shared/styleGuide';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from '../state/quote/quoteActionCreators';
import {updateThemeColor} from '../state/theme/themeActionCreators';
import AddQuote from './AddQuote';
import QuoteList from './QuoteList';
import ThemeSelect from './ThemeSelect';

class App extends React.Component {

  render() {

    return (
      <div style={wrapper}>
        <div
          style={{
            ...container,
            background: this.props.theme.color
          }}
        >
          <AddQuote addQuoteById={this.props.addQuoteById} />
        </div>
        <QuoteList
          quotes={this.props.quotes}
          theme={this.props.theme}
          removeQuoteById={this.props.removeQuoteById}
          likeQuoteById={this.props.likeQuoteById}
          unlikeQuoteById={this.props.unlikeQuoteById}
        />
        <ThemeSelect
          theme={this.props.theme}
          updateThemeColor={this.props.updateThemeColor}
        />
      </div>
    );
  }
}

App.propTypes = {
  quotes: React.PropTypes.array.isRequired,
  addQuoteById: React.PropTypes.func.isRequired,
  likeQuoteById: React.PropTypes.func.isRequired,
  unlikeQuoteById: React.PropTypes.func.isRequired,
  removeQuoteById: React.PropTypes.func.isRequired,
  theme: React.PropTypes.object.isRequired,
  updateThemeColor: React.PropTypes.func.isRequired
};

// Use react-redux's connect() method to specify how to map pieces of the store to the provided component's props
function select(state) {
  return {
    quotes: state.quotes,
    theme: state.theme
  };
}

export default connect(
  select,
  {
    addQuoteById,
    removeQuoteById,
    likeQuoteById,
    unlikeQuoteById,
    updateThemeColor
  }
)(App);
