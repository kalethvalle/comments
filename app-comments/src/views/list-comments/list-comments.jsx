import * as React from 'react';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { useRouting } from '../../utilities/useRouting';
import { useListComments } from './useListComments';

export const ListComment = () => {
    const { comments, editComment } = useListComments();
    const { routingTo } = useRouting();
    return (
        <Container maxWidth="xl" style={{ padding: 30 }}>
            <Button 
                variant="contained"
                onClick={() => routingTo('/comentarios/creacion')}
            > 
                agregar comentario
            </Button>
            <TableContainer component={Paper} style={{ marginTop: 10 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Website</TableCell>
                            <TableCell align="center">Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {comments.map((item) => (
                            <TableRow
                                key={item.email}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center">{item.webSite}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" onClick={() => editComment(item._id)}> editar </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
