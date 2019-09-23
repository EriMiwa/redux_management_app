import React from 'react';
import Page from '../components/Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists, addList, clickList } from '../actions/lists'

class Container extends React.Component {
  render() {
    const { lists, clickList, addList, getLists } = this.props;
    return (
      <Page
        lists={lists}
        clickList={clickList}
        addList={addList}
      />
    )
  }
}

//Getter: gets the state from store => converts to props in this component
function mapStateToProps(state) {
  return {
    lists: state.listFile.lists,
  }
}

//Setter: getting the actions to dispatch => converts to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLists,
    addList,
    clickList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
