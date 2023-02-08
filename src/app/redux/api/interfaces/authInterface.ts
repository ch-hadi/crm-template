import {User} from "./userInterface"

export interface LoginRequest {
    email:string,
    password:string,
    // e:object
}

export interface LoginResponse {
    user:User
}