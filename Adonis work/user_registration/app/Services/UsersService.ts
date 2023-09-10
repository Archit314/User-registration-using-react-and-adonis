// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
const uuid = require("uuid");
import Logger from '@ioc:Adonis/Core/Logger'
// import auth from 'Config/auth';

export default class UserService {
    async userSignup(name: string, userName: string, mobileNumber: string, email: string, password: string, auth) {

        const newUser = new User()
        newUser.id = uuid.v4()
        newUser.name = name
        newUser.userName = userName
        newUser.mobileNumber = mobileNumber
        newUser.email = email
        newUser.password = password

        await newUser.save()
        Logger.info("New user saved successfully with id as ${newUser.id}.")

        const accessToken = await auth.use("api").login(newUser, {
            expiresIn: "5 mins",
        });
        Logger.info(`API token generated successfully.  ${accessToken}`)

        const responseData = {
            newUser: newUser,
            accessToken: accessToken
        }

        Logger.info(`New user signup successfully.`)
        return responseData
    }

    async userLogin(){
        
    }
}