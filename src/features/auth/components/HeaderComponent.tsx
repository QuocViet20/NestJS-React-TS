import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Badge, Box, Button, Toolbar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hook';
import { logout, selectedUser } from '../../auth/authSlice';

const HeaderComponent = () => {
    const { user } = useAppSelector(selectedUser);


    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ backgroundColor: '#131921', color: 'white', padding: '4px' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img
                        onClick={() => navigate('/')}
                        style={{
                            width: '113px',
                            height: '30px',
                            paddingTop: '10px',
                            cursor: 'pointer',
                        }}
                        src='/branding-in-the-digital-age.jpg'
                        alt='brand-log'
                    />
                    <div style={{ display: 'flex' }}>
                        <div style={{ padding: 0, marginRight: '16px', color: "green" }} >Hello {user?.name}</div>
                        <div>
                            <Button
                                onClick={logoutHandler}
                                sx={{ padding: '0 4px', marginRight: '16px', backgroundColor: 'gray', color: 'white' }}

                            >
                                Log out
                            </Button>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default HeaderComponent;