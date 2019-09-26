import React from 'react';
import Navbar from './Toolbar'
import ListTable from './ListTable';

class Page extends React.Component {

    render() {
        const { addList, editList, deleteList, lists } = this.props;
        return (
            <div>
                <Navbar/>
                <ListTable
                    issueLists={lists}
                    onDeleteList={deleteList}
                    onEditList={editList}
                    onAddList={addList}
                />
            </div>
        );
    }
}

export default Page;
