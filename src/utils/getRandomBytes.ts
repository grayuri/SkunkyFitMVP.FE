import crypto from "crypto"

export default function getRandomBytes() {
  return crypto.randomBytes(4).toString()
}