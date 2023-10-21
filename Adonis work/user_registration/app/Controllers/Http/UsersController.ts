import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import ApiToken from 'App/Models/ApiToken'
import User from 'App/Models/User'
import UserService from 'App/Services/UsersService'
import Encryption from '@ioc:Adonis/Core/Encryption';

export default class UsersController {

    public async userRegistration(ctx: HttpContextContract) {

        const { response, request } = ctx

        // validation for input fields
        await request.validate({

            // validation schema
            schema: schema.create({
                name: schema.string(),
                userName: schema.string(),
                mobileNumber: schema.string(),
                email: schema.string(),
                password: schema.string(),
            }),

            // validation messages
            messages: {
                'name.required': 'Name is required.',
                'userName.required': 'User name is required.',
                'mobileNumber.required': 'Mobile number is required.',
                'email.required': 'Email is required.',
                'password.required': 'Password is required.',
            }
        }) // end of validation

        let { name, userName, mobileNumber, email, password } = request.all()

        const existUser = await User.query().select('mobile_number', 'user_name').where('mobile_number', mobileNumber).orWhere('user_name', userName).first()

        if (existUser) {
            const exists = existUser.userName === userName ? "User name" : "Mobile number"
            return response.status(422).send({ status: 422, message: `${exists} already exists.` })
        }

        password = await Encryption.encrypt(password, 0, `hsn`)        

        const userService = new UserService()
        const userSignuped = await userService.userSignup(name, userName, mobileNumber, email, password)

        if (!userSignuped) return response.status(422).send({ status: 422, messages: "User register failed." })

        return response.status(200).send({ status: 200, message: "User signup successfully", data: userSignuped })
    }

    // User login method
    public async userLogin(ctx: HttpContextContract){

        const {response, request} = ctx

        await request.validate({
            schema: schema.create({
                userName: schema.string(),
                password: schema.string(),
            }),
            messages: {
                'userName.required': 'User name is required.',
                'password.required': 'Password is required.'
            }
        })

        let {userName, password} = request.all()
        
        const existUser = await User.query().where('user_name', userName).orWhere('email', userName).first()

        if(!existUser) return response.status(422).send({status: 422, message: "User not found"})        

        let existUserDecryptedPassword = await Encryption.decrypt(existUser.password, 'hsn')        

        if(password != existUserDecryptedPassword){
            return response.status(422).send({status: 422, message: `Password mismatch.`})
        }

        const token = await ApiToken.query().select('token').where('user_id', existUser.id).where('password', existUser.password).first()        

        if(!token) return response.status(422).send({status: 422, message: "User not found"})

        return response.status(200).send({status: 200, message: `User sign in successfully`, data: token})
    }
}
