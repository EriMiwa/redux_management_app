import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

// export default function DeleteDialog() {
export default class DeleteDialog extends React.Component{
    state = {
        open: false
    }

    render() {

        const { open } = this.state;
        const { onDeleteList, list, id } = this.props;


        const handleClickOpen = () => {
            this.setState({open: true})
        };
    
        const handleClose = () => {
            this.setState({open: false})
        };
    
        const handleDelete = (id) => {
            onDeleteList(id)
            // this.window.forceUpdate();
            console.log('deleted', list.id)
            this.setState({open: false})
        }

        return (
            <div>
            <IconButton
                color="secondary"
                aria-label="delete"
                onClick={handleClickOpen}
            >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="delete-dialog-description-id">
                    Id: {list.id}
                </DialogContentText>
                <DialogContentText id="delete-dialog-description-title">
                    Title: {list.title}
                </DialogContentText>
                <DialogContentText id="delete-dialog-description-state">
                    State: {list.state}
                </DialogContentText>
                <DialogContentText id="delete-dialog-description-url">
                    Url: {list.url}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleDelete} color="primary">
                    Delete
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}
