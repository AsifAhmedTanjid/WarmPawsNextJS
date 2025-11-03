import React, { Suspense } from 'react';
import ForgetPasswordForm from '../components/ForgetPasswordForm/ForgetPasswordForm';

const ForgetPassword = () => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <ForgetPasswordForm></ForgetPasswordForm>
      </Suspense>
    );
};

export default ForgetPassword;