import React from 'react';
import Page from '../components/Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists, addList, clickList, deleteList} from '../actions/lists'

class Container extends React.Component {
  render() {
    const { lists, clickList, addList, getLists, deleteList } = this.props;
    return (
      <Page
        lists={lists}
        clickList={clickList}
        addList={addList}
        deleteList={deleteList}
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
    deleteList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
