"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UsersService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/UsersService"));
class UsersController {
    async userRegistration(ctx) {
        const { response, request } = ctx;
        await request.validate({
            schema: Validator_1.schema.create({
                name: Validator_1.schema.string(),
                userName: Validator_1.schema.string(),
                mobileNumber: Validator_1.schema.string(),
                email: Validator_1.schema.string(),
                password: Validator_1.schema.string(),
            }),
            messages: {
                'name.required': 'Name is required.',
                'userName.required': 'User name is required.',
                'mobileNumber.required': 'Mobile number is required.',
                'email.required': 'Email is required.',
                'password.required': 'Password is required.',
            }
        });
        const { name, userName, mobileNumber, email, password } = request.all();
        const existUser = await User_1.default.query().select('mobile_number', 'user_name').where('mobile_number', mobileNumber).orWhere('user_name', userName).first();
        if (existUser) {
            const exists = existUser.userName === userName ? "User name" : "Mobile number";
            return response.status(422).send({ status: 422, message: `${exists} already exists.` });
        }
        const userService = new UsersService_1.default();
        const userSignuped = await userService.userSignup(name, userName, mobileNumber, email, password, ctx.auth);
        if (!userSignuped)
            return response.status(422).send({ status: 422, messages: "User register failed." });
        return response.status(200).send({ status: 200, message: "User signup successfully", data: userSignuped });
    }
    async userLogin(ctx) {
        const { response, request } = ctx;
        await request.validate({
            schema: Validator_1.schema.create({
                userName: Validator_1.schema.string(),
                password: Validator_1.schema.string(),
            }),
            messages: {
                'userName.required': 'User name is required.',
                'password.required': 'Password is required.'
            }
        });
        const { userName, password } = request.all();
        const existUser = await User_1.default.query().where('user_name', userName).orWhere('email', userName).first();
        if (!existUser)
            return response.status(422).send({ status: 422, message: "User not found" });
        const token = await ctx.auth.use("api").attempt(userName, password, {
            expiresIn: "5 mins"
        });
        if (!token)
            return response.status(422).send({ status: 422, message: "User not found" });
        return response.status(200).send({ status: 200, message: token.toJSON() });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map