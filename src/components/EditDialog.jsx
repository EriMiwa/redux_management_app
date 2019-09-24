import React　from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";



export default class EditDialog extends React.Component{
    state = {
        open: false
    }

    render() {

        const { open } = this.state;
        const { list } = this.props;


        const handleClickOpen = () => {
            this.setState({open: true})
        };
    
        const handleClose = () => {
            this.setState({open: false})
        };

        return (
            <div>
                <IconButton
                    color="secondary"
                    aria-label="create"
                    onClick={handleClickOpen}
                >
                    <CreateIcon />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose} 
                    aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">
                    Issue id: {list.id}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Id"
                        type="text"
                        fullWidth
                        value={list.id}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={list.title}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                        value={list.state}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Url"
                        type="text"
                        fullWidth
                        value={list.url}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="createdDate"
                        label="Created at"
                        type="text"
                        fullWidth
                        value={list.createdDate}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="updatedDate"
                        label="Updated at"
                        type="text"
                        fullWidth
                        value={list.updatedDate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                    Save
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}