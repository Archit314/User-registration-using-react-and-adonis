import { DateTime } from "luxon";

export interface UserResponse {

    'id': string,
    'name': string,
    'userName': string,
    'mobileNumber': string,
    'email': string,
    'password': string,
    'createdAt': DateTime | null,
    'updatedAt': DateTime | null
  }
  