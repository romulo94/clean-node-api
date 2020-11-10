import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldNameToCompare: string
  ) {
    this.fieldName = fieldName
    this.fieldNameToCompare = fieldNameToCompare
  }

  validate(input: any): Error {
    if (input[this.fieldName] !== input[this.fieldNameToCompare]) {
      return new InvalidParamError(this.fieldNameToCompare)
    }
  }
}
