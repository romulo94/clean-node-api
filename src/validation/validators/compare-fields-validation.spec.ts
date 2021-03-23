import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidParamError } from '../../presentation/errors'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('CompareField Validation', () => {
  test('Should return an MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_field',
      fieldToCompare: 'wrong_field',
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_field',
      fieldToCompare: 'any_field',
    })
    expect(error).toBeFalsy()
  })
})
