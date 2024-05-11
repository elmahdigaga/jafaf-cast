import { createHmac } from 'crypto'

export function hash(value, salt) {
  return createHmac('sha256', salt).update(value).digest('hex')
}
