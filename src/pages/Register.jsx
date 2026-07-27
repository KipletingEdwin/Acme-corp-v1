
import React, { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { UserPlus } from 'lucide-react';

export const Register = () => {

  const[showOtp, setShowOtp] = useState(false);


  return (
    <AuthLayout
    icon={UserPlus}
    >

    </AuthLayout>
  )
}
