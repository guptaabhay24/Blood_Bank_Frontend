import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Services.css'

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 1, boxShadow: 3 }} className='card'>

                <CardMedia
                    component="img"
                    style={{ width: '365px', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"

                />

                <CardContent>

                    <Typography variant='h6' component='div' sx={{ color: 'success.main', mx: "auto", textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography variant='body4' sx={{ mx: "auto", textAlign: 'center', pl: '3' }}>
                        {description}
                    </Typography>


                </CardContent >

            </Card>
        </Grid>
    );
};

export default Service;