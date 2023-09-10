"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const uuid = require("uuid");
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
class UserService {
    async userSignup(name, userName, mobileNumber, email, password, auth) {
        const newUser = new User_1.default();
        newUser.id = uuid.v4();
        newUser.name = name;
        newUser.userName = userName;
        newUser.mobileNumber = mobileNumber;
        newUser.email = email;
        newUser.password = password;
        await newUser.save();
        Logger_1.default.info("New user saved successfully with id as ${newUser.id}.");
        const accessToken = await auth.use("api").login(newUser, {
            expiresIn: "5 mins",
        });
        Logger_1.default.info(`API token generated successfully.  ${accessToken}`);
        const responseData = {
            newUser: newUser,
            accessToken: accessToken
        };
        Logger_1.default.info(`New user signup successfully.`);
        return responseData;
    }
    async userLogin() {
    }
}
exports.default = UserService;
//# sourceMappingURL=UsersService.js.map