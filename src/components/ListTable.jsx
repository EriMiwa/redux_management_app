import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteDialog from "./DeleteDialog";
import AddDialog from './AddDialog';
import EditDialog from './EditDialog';

export default class ListTable extends React.Component {

    state = {
        open: false
    }

    render() {
        const { onEditList, issueLists, onDeleteList } = this.props;
        const { open } = this.state;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Url</TableCell>
                            <TableCell>Created at</TableCell>
                            <TableCell>Updated at</TableCell>
                            <TableCell>
                                <AddDialog open={open} handleInputValue={this.props.onAddList}/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            issueLists.map(list => (
                                <TableRow key={list.id}>
                                    <TableCell 
                                        component="th" 
                                        scope="row"
                                    >
                                        {list.id}
                                    </TableCell>
                                    <TableCell>{list.title}</TableCell>
                                    <TableCell>{list.state}</TableCell>
                                    <TableCell>{list.url}</TableCell>
                                    <TableCell>{list.createdDate}</TableCell>
                                    <TableCell>{list.updatedDate}</TableCell>
                                    <TableCell>
                                        <EditDialog open={open} onEditList={onEditList} list={list}/>
                                        <DeleteDialog open={open} onDeleteList={onDeleteList} list={list} id={list.id}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         lists: state.lists
//     }
// }

// export default connect(mapStateToProps)(ListTable);