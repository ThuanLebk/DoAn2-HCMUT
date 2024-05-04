import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Icon, CardActionArea } from '@mui/material';
import InputSlider from './InputSlider';

function FanCard() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const [formName, setFormName] = useState('');
    const [formImage, setFormImage] = useState('');

    // Fetch initial data
    useEffect(() => {
        const fetchData = async () => {
            const url = ''; // Your API endpoint
            try {
                const response = await fetch(url);
                const data = await response.json();
                setName(data.name);
                setImageUrl(data.imageUrl);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on component mount

    const handleClickOpen = () => {
        setOpen(true);
        setIsEditMode(false); // Opens in view mode by default
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = () => {
        const url = '';
        const data = { formName, formImage };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setOpen(false);
            setIsEditMode(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', marginBottom: '100px'}}>
            <Card sx={{ width: 345, borderRadius: '16px', marginLeft: '20px'}}>
                <CardMedia
                    sx={{ height: 140}}
                    image={imageUrl}
                    title={name}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <InputSlider/>
                </CardContent>
                <CardContent sx = {{display: 'flex', justifyContent: 'right'}}>
                <Button onClick={handleClickOpen} startIcon = {<Icon>settings</Icon>} color='primary' size='small'
                     variant="outlined">Settings</Button>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fan Settings</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Name"
                        defaultValue={name}
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        margin="dense"
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Image URL"
                        defaultValue={imageUrl}
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        margin="dense"
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    {isEditMode ? (
                        <>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSave} variant='contained' color="primary">Save</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleClose}>Close</Button>
                            <Button onClick={handleEdit} variant='contained' color="primary">Edit</Button>
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default FanCard;
