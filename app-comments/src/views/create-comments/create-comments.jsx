import React from 'react';
import { useRouting } from '../../utilities/useRouting';
import { useCreateComments } from './useCreateComments';
import { Box, Grid, Button, TextField } from '@mui/material';

export const CreateComments = () => {
    const { routingTo } = useRouting();
    const { onChangeValues, saveComment, updateComment, comment, update } = useCreateComments();
    return (
        <Box style={{ padding: 30 }}>
            <Grid container spacing={0}>
                <Grid xs={12} md={4} style={{ padding: 5 }}>
                    <TextField
                        value={comment.name}
                        id="outlined-basic"
                        label="Nombre:"
                        variant="outlined"
                        fullWidth 
                        onChange={(e) => onChangeValues("name", "input", e.target.value)}
                    />
                </Grid>
                <Grid xs={12} md={4} style={{ padding: 5 }}>
                    <TextField
                        value={comment.email}
                        id="outlined-basic"
                        label="Correo Electrónico:"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => onChangeValues("email", "input", e.target.value)}
                    />
                </Grid>
                <Grid xs={12} md={4} style={{ padding: 5 }} >
                    <TextField
                        value={comment.webSite}
                        id="outlined-basic"
                        label="Página Web:"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => onChangeValues("webSite", "input", e.target.value)}
                    />
                </Grid>
                <Grid xs={12} md={12} style={{ padding: 5 }} >
                    <TextField 
                        value={comment.comment}
                        id="outlined-basic"
                        label="Comentario:"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={(e) => onChangeValues("comment", "input", e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid xs={12} md={10}>
                </Grid>
                <Grid xs={12} md={2}>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid xs={12} md={6}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={()=> update ? updateComment() : saveComment()}
                            >
                                    {update ? 'Actulizar' : 'Guardar'}
                            </Button>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => routingTo('/')}
                            >
                                Regresar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}