import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return users
  }

  public async create({ request }: HttpContextContract) {
    const { username, name, mail } = request.only(['name', 'username', 'mail'])

    const user = await User.create({ username, name, mail })
    return user
  }
}
