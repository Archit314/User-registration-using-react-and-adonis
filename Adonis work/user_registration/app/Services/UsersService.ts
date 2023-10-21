// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
const uuid = require("uuid");
import Logger from '@ioc:Adonis/Core/Logger'
import ApiToken from 'App/Models/ApiToken';
import { string } from '@ioc:Adonis/Core/Helpers'

// import auth from 'Config/auth';

export default class UserService {
    async userSignup(name: string, userName: string, mobileNumber: string, email: string, password: string) {

        const newUser = new User()
        newUser.id = uuid.v4()
        newUser.name = name
        newUser.userName = userName
        newUser.mobileNumber = mobileNumber
        newUser.email = email
        newUser.password = password

        await newUser.save()
        Logger.info("New user saved successfully with id as ${newUser.id}.")

        const apiToken = new ApiToken()
        apiToken.id = uuid.v4()
        apiToken.userId = newUser.id
        apiToken.name = newUser.name
        apiToken.userName = newUser.userName
        apiToken.email = newUser.email
        apiToken.token = string.generateRandom(64)
        apiToken.password = password
        apiToken.status = true

        await apiToken.save()
        Logger.info(`API token generated successfully.  ${apiToken}`)

        const responseData = {
            newUser: newUser,
            accessToken: apiToken
        }

        Logger.info(`New user signup successfully.`)
        return responseData
    }

    async userLogin(){
        
    }
}