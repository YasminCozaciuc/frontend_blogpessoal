import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import './Home.css'
import { Box, Button } from '@mui/material';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#ae7db0", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#ae7db0", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#824e8d", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.ojornalzinho.com.br/wp-content/uploads/2020/10/feminismo-moderno-mao-desenhada.jpg" alt="" width="600px" height="600px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;