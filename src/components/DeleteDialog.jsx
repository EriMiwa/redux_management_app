import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DeleteDialog() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                Id: 496818605
            </DialogContentText>
            <DialogContentText id="delete-dialog-description-title">
                Title: feat(router): remove deprecated initialNavigation options and change default
            </DialogContentText>
            <DialogContentText id="delete-dialog-description-state">
                State: open
            </DialogContentText>
            <DialogContentText id="delete-dialog-description-url">
                Url: https://api.github.com/repos/angular/angular/issues/32810
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
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