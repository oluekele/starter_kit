export const loginUser = async (payload: { email: string; password: string }) => {
  const res = await fetch('https://starter-kit-backend-fjf7.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const signupUser = async (payload: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  const res = await fetch('https://starter-kit-backend-fjf7.onrender.com/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Signup failed');
  }
  return res.json();
};


export const verifyOtp = async (email: string, otp: string) => {
  const res = await fetch('https://starter-kit-backend-fjf7.onrender.com/api/auth/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp }),
  });

  if (!res.ok) throw new Error('OTP verification failed');
  return res.json();
};

export const forgotPassword = async (email: string) => {
  const res = await fetch('https://starter-kit-backend-fjf7.onrender.com/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) throw new Error('Failed to send OTP');
  return res.json();
};

export const resetPassword = async (email: string, newPassword: string) => {
  const res = await fetch('https://starter-kit-backend-fjf7.onrender.com/api/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, newPassword }),
  });

  if (!res.ok) throw new Error('Failed to reset password');
  return res.json();
};
