import { Field } from "../field";
import { Input } from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "@/components/UI/password-input"
import "./FormField.scss"
import { RefObject, useRef, useState } from "react";

interface Props {
  name: string
  label: string
  placeholder: string
  register: any
  helper?: string
  error?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormField({ name, label, placeholder, helper, error, register, type, onChange, ...rest }: Props) {
  const [passwordStrength, setPasswordStrength] = useState(0)

  const fieldProps = {
    label,
    helperText: helper,
    invalid: !!error,
    errorText: error
  }

  const registerField = register(name)
  
  const inputProps = {
    placeholder,
    ...registerField,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      registerField.onChange(e)
      if (onChange) onChange(e)
    }
  }

  const passwordInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      registerField.onChange(e)
      checkPasswordStrength(e.target.value)
    }
  }

  function checkPasswordStrength(value: string) {
    const maxValidations = 5
    const hasLowerCaseRX = /[a-z]/
    const hasUpperCaseRX = /[A-Z]/
    const hasNumberRX = /\d/
    const hasSymbolRX = /[!@#$%^&*(),.?":{}|<>]/
    let quantity = 0

    if (value.length >= 8) {
      quantity++
      
      if (hasLowerCaseRX.test(value)) quantity++
      if (hasUpperCaseRX.test(value)) quantity++
      if (hasNumberRX.test(value)) quantity++
      if (hasSymbolRX.test(value)) quantity++
    }

    setPasswordStrength(Math.floor((quantity / maxValidations) * 4))
  }

  if (fieldProps.invalid) inputProps["style"] = {
    outline: "2px solid #D8442A",
    border: "2px solid transparent"
  }

  if (!type) return (
    <Field { ...fieldProps } className="form-field">
      <Input 
        { ...inputProps } 
      />
    </Field>
  )

  if (type === "password") return (
    <Field { ...fieldProps } className="form-field">
      <PasswordInput 
        { ...inputProps } 
        { ...passwordInputProps }
      />
      <PasswordStrengthMeter width="full" value={passwordStrength} />
    </Field>
  )
}
