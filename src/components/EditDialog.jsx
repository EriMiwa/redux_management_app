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
        const { list } = this.props;

        //handler for opening/closing dialog
        const handleClickOpen = () => {
            this.setState({open: true})
        };
    
        const handleClickClose = () => {
            this.setState({open: false})
        };

        //handler for dialog form input
        //ID
        const handleIdInputValue = (e) => {
            this.setState({idValue: e.target.value});
            console.log(this.state.idValue)
        } 
        //Title
        const handleTitleInputValue = (e) => {
            this.setState({titleValue: e.target.value});
            console.log(this.state.titleValue)
        }
        //state
        const handleStateInputValue = (e) => {
            this.setState({stateValue: e.target.value});
            console.log(this.state.stateValue)
        }
        //URL
        const handleUrlInputValue = (e) => {
            this.setState({urlValue: e.target.value});
            console.log(this.state.urlValue)
        }
        //created date
        const handleCreatedDateInputValue = (e) => {
            this.setState({createdDateValue: e.target.value});
            console.log(this.state.createdDateValue)
        }
        //updated date
        const handleUpdateDateInputValue = (e) => {
            this.setState({updatedDateValue: e.target.value});
            console.log(this.state.updatedDateValue)
        }

        const handleEditList = (e) => {
            e.preventDefault();
            const editedIssue = {
                id: this.state.idValue,
                title: this.state.titleValue,
                state: this.state.stateValue,
                url: this.state.urlValue,
                createdDate: this.state.createdDateValue,
                updatedDate: this.state.updatedDateValue
            }

            const id = this.props.list.id;
            this.props.onEditList(editedIssue,id);
            
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
                    color="secondary"
                    aria-label="create"
                    onClick={handleClickOpen}
                >
                    <CreateIcon />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClickClose} 
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
                        defaultValue={list.id}
                        onChange={handleIdInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        defaultValue={list.title}
                        onChange={handleTitleInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                        defaultValue={list.state}
                        onChange={handleStateInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Url"
                        type="text"
                        fullWidth
                        defaultValue={list.url}
                        onChange={handleUrlInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="createdDate"
                        label="Created at"
                        type="text"
                        fullWidth
                        defaultValue={list.createdDate}
                        onChange={handleCreatedDateInputValue}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="updatedDate"
                        label="Updated at"
                        type="text"
                        fullWidth
                        defaultValue={list.updatedDate}
                        onChange={handleUpdateDateInputValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleEditList} color="primary">
                    Save
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}