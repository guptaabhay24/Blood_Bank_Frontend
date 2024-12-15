import React from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const services = [




    {
        name: 'Organize Donors',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: 'https://us.123rf.com/450wm/photobuay/photobuay1811/photobuay181100039/121410039-donate-blood-group-doctor-concepts.jpg',
    },
    {
        name: 'Raise Awareness',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: "https://kauveryhospital.com/blog/wp-content/uploads/2021/06/pexels-photo-6823567-1200x545_c.jpeg",
    },
    {
        name: 'Collect Rare Blood',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: 'https://oneblood.scene7.com/is/image/oneblood/RareBloodTypes-BlogImage%20TEST%3ASmall?ts=1729696921954&dpr=off',
    },


]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container >
                <Typography sx={{ fontweight: 700, my: 2, textAlign: 'center' }} className='text-title' variant="h4" component="div" >
                    Our Services
                </Typography>
                <Typography sx={{ fontweight: 600, mb: 4, textAlign: 'center' }} variant="h5" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={Service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;