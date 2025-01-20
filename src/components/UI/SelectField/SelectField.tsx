import { Field } from "@/components/UI/field";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./SelectField.scss";

interface Option {
  label: string
  value: string
}

interface Props {
  options: string[]
  name: string
  label: string
  placeholder: string
  register: any
  error?: string
}

export default function SelectField({ name, label, placeholder, options, error, register }: Props) {
  const fieldProps = {
    invalid: !!error,
    errorText: error,
    label
  }

  const inputProps: any = {
    ...register("dietObjective")
  }

  if (fieldProps.invalid) inputProps["style"] = {
    outline: "2px solid #D8442A",
    border: "2px solid transparent"
  }

  const optionsArray: Option[] = []

  options.forEach((option: string) => {
    const optionItem = { label: option, value: option.toUpperCase().replaceAll(" ", "_").replaceAll("&", "and") }

    optionsArray.push(optionItem)
  })

  return (
    <Field {...fieldProps} className="select-field">
      <div className="select-container">
        <select
          name={name}
          title={name}
          defaultValue={""}
          {...inputProps}
        >
          <option value="" hidden>{placeholder}</option>
          {
            optionsArray.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
        <KeyboardArrowDownIcon className="icon" />
      </div>
    </Field>
  )
}

{/*  */ }