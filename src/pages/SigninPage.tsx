import React from "react";
import AuthLayout from "../features/auth/components/authLayout";
import SigninFormComponent from "../features/auth/components/SigninFormComponent";

const SigninPage = () => {
    return (<AuthLayout>
        <SigninFormComponent />
    </AuthLayout>)
};

export default SigninPage;
