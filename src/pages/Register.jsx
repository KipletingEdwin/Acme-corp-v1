
import React, { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { UserPlus } from 'lucide-react';

export const Register = () => {

  const[showOtp, setShowOtp] = useState(false);


  return (
    <AuthLayout
    icon={UserPlus}
    title="Create your account"
    subtitle="Signup to get started"
    footer={
      <>
      Already have an account?
      <Link
       to="/login"
       >
      Login
      </Link>
      </>
    }
    >

    </AuthLayout>
  )
}
