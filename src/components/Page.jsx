import React from 'react';
import Navbar from './Toolbar'
import ListTable from './ListTable';
// import AddDialog from './components/AddDialog';

class Page extends React.Component {

    render() {
        const { addList, clickList, lists } = this.props;
        return (
            <div>
                <Navbar/>
                <ListTable
                    issueLists={lists}
                    onClickList={clickList}
                />
                {/* <AddDialog handleInputValue={addList}/> */}
            </div>
        );
    }
}

export default Page;
