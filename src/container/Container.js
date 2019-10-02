import React from 'react';
import Page from '../components/Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists, addList, editList, deleteList} from '../actions/lists'

function Container(props) {

  return (
    <Page
      lists={props.lists}
      editList={props.editList}
      addList={props.addList}
      deleteList={props.deleteList}
    />
  )
}

//Getter: gets the state from store => converts to props in this component
function mapStateToProps(state) {
  console.log('state', state.listFile.lists);
  return {
    lists: state.listFile.lists,
  }
}

//Setter: getting the actions to dispatch => converts to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLists,
    addList,
    editList,
    deleteList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
