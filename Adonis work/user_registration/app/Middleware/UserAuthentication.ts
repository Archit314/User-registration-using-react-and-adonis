import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { UserResponse } from 'App/DTO/UserResponse'
import User from 'App/Models/User'

export default class UserAuthentication {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const authHeader = ctx.request.header('Authorization')
    // console.log(authHeader);
    

    if(!authHeader || !authHeader.startsWith('Bearer '))return ctx.response.status(422).send({status: 422, message: `Token  expired!`})

    const token = authHeader.replace('Bearer ', "")
    // console.log(token);

    const customerToken = await Database.from('api_tokens').select('*').where('token', token).first()
    // console.log(customerToken);
    

    if(!customerToken) return ctx.response.status(422).send({status: 422, message: `Token not found!`})

    const authenticatedUser = await User.query().where('id', customerToken.user_id).first()

    if(!authenticatedUser) return ctx.response.status(401).send({status: 422, message: `Unauthorized user!`})

    ctx.userAuthInfo = authenticatedUser as UserResponse

    await next()
  }
}
