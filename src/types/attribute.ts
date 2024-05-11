import { FakerDataType } from "./faker-data-type"

export interface Attribute {
  name: string
  dataType: FakerDataType
  isNullable: boolean
  isList: boolean
}