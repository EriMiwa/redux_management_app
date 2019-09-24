import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

export default class AddDialog extends React.Component {
    state = {
        open: false,
        value: "",
    }


    render() {
        const { open, id, title, state, url, createdDate, updatedDate } = this.state;
        const {  } = this.props;

        const handleClickOpen = () => {
            this.setState({
                open: true
            })
        };
    
        const handleClickClose = () => {
            this.setState({
                open: false
            })
        };
    
        return (
            <div>
                <IconButton
                    color="primary"
                    aria-label="add"
                    onClick={handleClickOpen}
                >
                    <AddIcon />
                </IconButton>
                <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Issue</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Id"
                        type="text"
                        fullWidth
                        onChange={this.upDateIdInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Url"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="createdDate"
                        label="Created at"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="updatedDate"
                        label="Updated at"
                        type="text"
                        fullWidth
                        value={this.state.inputValue}
                        onChange={this.upDateInputValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleClickClose} color="primary">
                    Save
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}