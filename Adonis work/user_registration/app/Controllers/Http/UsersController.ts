import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import UserService from 'App/Services/UsersService'
// import authConfig from 'Config/auth'

export default class UsersController {

    public async userRegistration({ auth, response, request }: HttpContextContract) {

        // const { response, request } = ctx

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

        const { name, userName, mobileNumber, email, password } = request.all()

        const existUser = await User.query().select('mobile_number', 'user_name').where('mobile_number', mobileNumber).orWhere('user_name', userName).first()

        if (existUser) {
            const exists = existUser.userName === userName ? "User name" : "Mobile number"
            return response.status(422).send({ status: 422, message: `${exists} already exists.` })
        }
        // return true
        const userService = new UserService()
        const userSignuped = await userService.userSignup(name, userName, mobileNumber, email, password, auth)

        if (!userSignuped) return response.status(422).send({ status: 422, messages: "User register failed." })

        return response.status(200).send({ status: 200, message: "User signup successfully", data: userSignuped })
    }
}
