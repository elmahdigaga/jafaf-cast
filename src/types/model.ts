import { Attribute } from "./attribute"

export interface Model {
  id?: number
  createdAt?: string
  name: string
  description: string
  attributes: Attribute[]
}