"use client"

import { useRef, useState } from "react";
import { Field } from "../field";
import UploadFileIcon from '@mui/icons-material/UploadFile';

interface Props {
  name: string
  label: string
  register: any
  accept: string[]
  error?: string
}

export default function FileUploadField({ name, label, error, register, accept }: Props) {
  const [file, setFile] = useState<any>(null)
  const fileInputRef = useRef<any>(null)
  const { ref, onChange, ...rest } = register(name)

  let validTypes = ""

  accept.forEach((type: string, index: number) => {
    if (index === accept.length - 1) validTypes += type
    else if (index < accept.length - 1) validTypes += `${type}, `
  })

  const fieldProps = {
    label,
    invalid: !!error,
    error: error
  }

  function getFileInputRef(e: any) {
    ref(e)
    fileInputRef.current = e
  }

  function changeFile(e: any) {
    onChange(e)
    setFile(e.target.files[0].name)
  }

  return (
    <Field { ...fieldProps }>
      <div 
        className="file-input-container"
        style={fieldProps.invalid ? ({ outline: "2px solid #D8442A", border: "2px solid transparent" }) : ({})}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          name={name}
          id="file-input" 
          type="file" 
          className="file-input" 
          accept={validTypes} 
          ref={getFileInputRef}
          onChange={changeFile}
          {...rest}
        />
        <div className="content">
          <UploadFileIcon className="icon" />
          <span className="file-name">
            {
              file
              ? file
              : "Select Your File(s)"
            }
          </span>
        </div>
      </div>
      {
        error && (
          <p>{error}</p>
        )
      }
    </Field>
  )
}
