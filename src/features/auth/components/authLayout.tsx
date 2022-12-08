import { FC, ReactNode } from 'react';

import { Grid } from '@mui/material';

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Grid
            sx={{ p: 2 }}
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
            borderRadius={{ p: 10 }}
        >
            <img src='branding-in-the-digital-age.jpg' alt='Brand-logo' height='100px' border-radius='10px' />
            <main>{children}</main>
        </Grid>
    );
};

export default AuthLayout;