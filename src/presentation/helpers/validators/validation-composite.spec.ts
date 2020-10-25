import { ValidationComposite } from './validation-composite'
import { MissingParamError } from '../../errors'
import { Validation } from './validation'

class ValidationStub implements Validation {
  validate(input: any): Error {
    return new MissingParamError('field')
  }
}

const makeSut = (): ValidationComposite => {
  return new ValidationComposite([new ValidationStub()])
}

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_field' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
