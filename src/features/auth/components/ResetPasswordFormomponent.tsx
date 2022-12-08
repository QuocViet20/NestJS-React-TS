import { FC, FormEvent, useEffect } from 'react'
import { Box, Grid, Typography, InputLabel, TextField, Button, Divider, CircularProgress } from '@mui/material'

import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../../hooks/input/useInput'
import { validateNameLength, validatePasswordLength } from '../../../shared/utils/validation/length'
import { validateEmail } from '../../../shared/utils/validation/email'
import { NewUser } from '../models/NewUser'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hook'
import { register, reset } from '../authSlice';


const ResetPasswordFormComponent: FC = () => {


    const {
        text: email,
        shouldDisplayError: emailHasError,
        textChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        clearHandler: emailClearHandler,
    } = useInput(validateEmail)

    const {
        text: password,
        shouldDisplayError: passwordHasError,
        textChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        clearHandler: passwordClearHandler,
    } = useInput(validatePasswordLength);

    const {
        text: newPassword,
        shouldDisplayError: newPasswordHasError,
        textChangeHandler: newPasswordChangeHandler,
        inputBlurHandler: newPasswordBlurHandler,
        clearHandler: newPasswordClearHandler,
    } = useInput(validatePasswordLength);

    const {
        text: confirmPassword,
        shouldDisplayError: confirmPasswordHasError,
        textChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        clearHandler: confirmPasswordClearHandler,
    } = useInput(validatePasswordLength);

    const clearForm = () => {

        emailClearHandler();
        passwordClearHandler();
        confirmPasswordClearHandler()
    }

    const dispatch = useAppDispatch();

    const { isLoading, isSuccess } = useAppSelector((state) => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset());
            clearForm();
            navigate('/signin')
        }
    }, [isSuccess, dispatch])

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) return;

        if (emailHasError || passwordHasError || confirmPasswordHasError) return;

        if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) return

    }

    if (isLoading) return <CircularProgress sx={{ marginTop: '64px' }} color='primary' />

    return (
        <Box sx={{
            border: 1,
            padding: 2,
            borderColor: '#cccccc',
            width: '350px',
            marginTop: 2
        }}>
            <form onSubmit={onSubmitHandler}>
                <Grid container direction='column' justifyContent="flex-start">
                    <Typography variant='h4' component='h1'>
                        Change Password
                    </Typography>

                    <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='name'>Email</InputLabel>
                    <TextField
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        error={emailHasError}
                        helperText={emailHasError ? 'Enter your email' : ''}
                        type='email'
                        name='email'
                        id="email"
                        variant='outlined'
                        size='small'
                    />

                    <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='name'>Password</InputLabel>
                    <TextField
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        error={passwordHasError}
                        helperText={passwordHasError ? 'Minimum 6 characters required' : ''}
                        type='password'
                        name='password'
                        id="password"
                        variant='outlined'
                        size='small'
                    />

                    <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='name'>New Password</InputLabel>
                    <TextField
                        value={newPassword}
                        onChange={newPasswordChangeHandler}
                        onBlur={newPasswordBlurHandler}
                        error={newPasswordHasError}
                        helperText={newPasswordHasError ? 'Minimum 6 characters required' : ''}
                        type='password'
                        name='newPassword'
                        id="newPassword"
                        variant='outlined'
                        size='small'
                    />

                    <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
                        htmlFor='name'>Confirm Password</InputLabel>
                    <TextField
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordBlurHandler}
                        error={confirmPassword.length > 0 && newPassword !== confirmPassword}
                        helperText={
                            confirmPassword.length > 0 && newPassword !== confirmPassword
                                ? 'Passwords must match'
                                : ''
                        }
                        type='password'
                        name='confirmPassword'
                        id="confirmPassword"
                        variant='outlined'
                        size='small'
                    />
                    <Button variant="contained" style={{
                        marginTop: '16px', height: '31px',
                        backgroundColor: '#foc14b', color: 'black', borderColor: '#a88734 #9c7321 #846a29',
                        textTransform: 'none'

                    }}
                        type='submit'>Submit</Button>
                    <Divider sx={{ marginTop: '36px', marginBottom: '36px' }} />

                    <div>
                        <small>
                            Already have an account?{' '}
                            <Link
                                to='/signin'
                                style={{ textDecoration: 'none', color: '#0000ee' }}
                            >
                                Sign-in
                            </Link>
                        </small>
                    </div>
                </Grid>
            </form>
        </Box>
    )
}

export default ResetPasswordFormComponent