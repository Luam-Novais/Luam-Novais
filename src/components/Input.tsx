import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  label: string;
  type: string
  placeholder?: string;
  children?: React.ReactNode
}
export function Input({ register,type ,  label, placeholder, children }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <input type={type} {...register} className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-violet-500" placeholder={placeholder} />
      {children}
    </div>
  );
}
