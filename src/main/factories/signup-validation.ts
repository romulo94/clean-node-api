import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-fields-validation'

export const makeSignUpValidation = (): ValidationComposite => {
  return new ValidationComposite(
    ['name', 'email', 'password', 'passwordConfirmation'].map(
      (field) => new RequiredFieldValidation(field)
    )
  )
}
