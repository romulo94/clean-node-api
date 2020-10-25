import { RequiredFieldValidation } from './required-fields-validation'
import { EmailValidator } from '../../protocols/email-validator'
import { MissingParamError } from '../../errors'

describe('RequiredField Validation', () => {
  test('Should return an MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
