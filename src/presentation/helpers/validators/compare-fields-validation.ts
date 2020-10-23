import { Validation } from './validation'
import { InvalidParamError } from '../../errors'

export class CompareFielsdValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldNameToCompare: string
  constructor(fieldName: string, fieldNameToCompare: string) {
    this.fieldName = fieldName
    this.fieldNameToCompare = fieldNameToCompare
  }

  validate(input: any): Error {
    if (input[this.fieldName] !== input[this.fieldNameToCompare]) {
      return new InvalidParamError(this.fieldNameToCompare)
    }
  }
}
