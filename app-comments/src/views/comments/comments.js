import { useComments } from './useComments';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const Comment = () => {
    const { rows } = useComments();
    return (
        <Container maxWidth="xl" style={{ padding: 30 }}>
            <Button variant="contained"> agregar comentario </Button>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.webSite}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained"> editar </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
