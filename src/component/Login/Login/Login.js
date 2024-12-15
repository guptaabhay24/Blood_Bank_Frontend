import React, { useState } from 'react'; 
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert} from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </Grid>
                <Grid className="text-center" item sx={{ mt: 10 }} xs={12} md={6}>
                    {isLoading && <CircularProgress />}
                    <Typography sx={{ width: '60%'}} variant="h4" gutterBottom>
                        Login Here
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', mt: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', mt: 2, mb:1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ width: '75%'}} variant="text">New User? Please Register</Button>
                        </NavLink> 
                        {user?.email && <Alert severity="success">Successfully Login Your Account</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------- OR -------------</p>
                    <Button sx={{ width: '75%', mb:5}} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;