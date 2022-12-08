import React from "react";
import AuthLayout from "../features/auth/components/authLayout";
import RegistrationFormComponent from "../features/auth/components/RegistrationFormComponent";

const RegisterPage = () => {
    return (<AuthLayout>
        <RegistrationFormComponent />
    </AuthLayout>)
};

export default RegisterPage;
