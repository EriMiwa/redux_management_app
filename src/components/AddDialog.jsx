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
        idValue: "",
        titleValue: "",
        stateValue: "",
        urlValue: "",
        createdDateValue: "",
        updatedDateValue: ""
    }

    render() {
        const { open } = this.state;

        //handler for opening/closing dialog
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

        //handler for dialog form input
        //ID
        const handleIdInputValue = (e) => {
            this.setState({idValue: e.target.value});
        } 
        //Title
        const handleTitleInputValue = (e) => {
            this.setState({titleValue: e.target.value});
        }
        //state
        const handleStateInputValue = (e) => {
            this.setState({stateValue: e.target.value});
        }
        //URL
        const handleUrlInputValue = (e) => {
            this.setState({urlValue: e.target.value});
        }
        //created date
        const handleCreatedDateInputValue = (e) => {
            this.setState({createdDateValue: e.target.value});
        }
        //updated date
        const handleUpdateDateInputValue = (e) => {
            this.setState({updatedDateValue: e.target.value});
        }

        const handleAddList = (e) => {
            e.preventDefault();
            const newIssue = {
                id: this.state.idValue,
                title: this.state.titleValue,
                state: this.state.stateValue,
                url: this.state.urlValue,
                createdDate: this.state.createdDateValue,
                updatedDate: this.state.updatedDateValue
            }

            this.props.handleInputValue(newIssue);

            this.setState({
                idValue: "",
                titleValue: "",
                stateValue: "",
                urlValue: "",
                createdDateValue: "",
                updatedDateValue: ""
            })

            handleClickClose();
        }


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
                        value={this.state.idValue}
                        onChange={handleIdInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={this.state.titleValue}
                        onChange={handleTitleInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                        value={this.state.stateValue}
                        onChange={handleStateInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Url"
                        type="text"
                        fullWidth
                        value={this.state.urlValue}
                        onChange={handleUrlInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="createdDate"
                        label="Created at"
                        type="text"
                        fullWidth
                        value={this.state.createdDateValue}
                        onChange={handleCreatedDateInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="updatedDate"
                        label="Updated at"
                        type="text"
                        fullWidth
                        value={this.state.updateDateValue}
                        onChange={handleUpdateDateInputValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleAddList} color="primary">
                    Save
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}