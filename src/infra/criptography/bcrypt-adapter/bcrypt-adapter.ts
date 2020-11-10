import bcrypt from 'bcrypt'
import { Hasher, HashComparer } from '../../../data/protocols'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) {
    this.salt = salt
  }

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
