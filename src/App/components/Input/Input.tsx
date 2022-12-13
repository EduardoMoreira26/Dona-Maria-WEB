import { InputHTMLAttributes, useCallback } from 'react'
import * as I from './Input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prefix?: string;
}

export default function Input({ label, prefix, ...props }: InputProps) {
  return <I.Wrapper>
    {
      label &&
      <span className='Label'>
        {label}:
      </span>
    }
    {prefix && <span>{prefix}</span>}
    <input
      {...props}
      type="text"
      prefix={prefix}
    />
  </I.Wrapper>
}


