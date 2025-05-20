import { useMutation } from '@tanstack/react-query';

export const useVerifyOTP = () => {
  return useMutation({
    mutationFn: async (form: { email: string; otp: string }) => {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      return data;
    },
  });
};
