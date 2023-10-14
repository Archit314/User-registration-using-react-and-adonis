declare module '@ioc:Adonis/Core/HttpContext' {
    /**
     * This contract is used to add new property to HttpContext Object Dynamically
     */
  
    import { UserResponse } from "App/DTO/UserResponse";
  
    interface HttpContextContract {
        userAuthInfo: UserResponse
    }
  }
  