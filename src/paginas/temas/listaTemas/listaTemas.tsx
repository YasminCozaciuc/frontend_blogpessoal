import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function ListaTemas() {
    return (
        <>
            <Box m={4}>
                <Card>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            Tema:
                        </Typography>
                        <Typography variant="h5" component="h2">
                            descrição tema
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button color='primary' variant='contained' size="small">Editar</Button>
                        <Button color='primary' variant='contained' size="small">Deletar</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default ListaTemas