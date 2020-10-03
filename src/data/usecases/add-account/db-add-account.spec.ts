import { DbAddAccount } from './db-add-account'
import { Encrypter } from '../../protocols/encrypter'

describe('DbAccount Usecase', () => {
  interface SutTypes {
    sut: DbAddAccount
    encrypterStub: Encrypter
  }

  const makeEncrypter = (): Encrypter => {
    class EncrypterStub implements Encrypter {
      async encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve('hashed_password'))
      }
    }

    return new EncrypterStub()
  }

  const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter()
    const sut = new DbAddAccount(encrypterStub)

    return {
      sut,
      encrypterStub,
    }
  }

  test('Should call Encrypter with correct password', () => {
    const { encrypterStub, sut } = makeSut()

    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    }

    sut.add(accountData)

    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
