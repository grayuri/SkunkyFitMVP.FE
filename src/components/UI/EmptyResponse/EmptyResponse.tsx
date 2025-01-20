"use client"

import Image from "next/image"
import { DialogTrigger } from "../dialog";
import './EmptyResponse.scss'
import ActionButton from "../ActionButton/ActionButton";
import AddIcon from '@mui/icons-material/Add';

interface Props {
  type: string
  object: string
  readonly?: boolean
}

export default function EmptyResponse({ type, object, readonly }: Props) {
  return (
    <div className={`empty-response ${type}`}>
      <div className="image">
        <Image
          alt={`Empty ${object} Image`}
          src={`/images/empty-${type}.svg`}
          fill
          quality={80}
        />
      </div>

      
      <div className="message">
        {
          !readonly 
          ? (
            <>
              <p>You dont create any <span className="highlight">{ object }</span> yet.</p>
              <p>
                Feel free to <span className="highlight">create</span> your first { object }.
              </p>
            </>
          )
          : (
            <>
              <p>Your <span className="highlight">foods</span> were not found.</p>
              <p>Try to search another one.</p>
            </>
          )
        }
      </div>

      {
        !readonly && (
          <DialogTrigger asChild>
            <ActionButton 
              route={type}
              padding="16px"
              borderRadius="8px"
              buttonVariant="filled"
              fontVariant="l2-r"
              icon={AddIcon}
              text={`Create ${ object }`}
            />
          </DialogTrigger>
        )
      }
    </div>
  )
}
