import { makeSignUpValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-fields-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidation', () => {
  test('Should call ValidationComposite with all validations', async () => {
    makeSignUpValidation()
    const validations: Validation[] = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ].map((field) => new RequiredFieldValidation(field))

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
