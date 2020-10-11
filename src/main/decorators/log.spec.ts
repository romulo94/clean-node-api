import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '../../presentation/protocols'
import { LogControllerDecorator } from './log'

describe('LogController Decorator', () => {
  class ControllerStub implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse: HttpResponse = {
        body: {},
        statusCode: 200,
      }
      return new Promise((resolve) => resolve(httpResponse))
    }
  }

  const httpRequest: HttpRequest = {
    body: {
      email: 'any_email@mail.com',
      name: 'any_name',
      password: 'any_password',
      passwordConfirmation: 'any_password@mail.com',
    },
  }

  test('Should call controller handle', async () => {
    const controllerStub = new ControllerStub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const sut = new LogControllerDecorator(controllerStub)

    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})
