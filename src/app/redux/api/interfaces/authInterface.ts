import {User} from "./userInterface"

export interface LoginRequest {
    email:string,
    password:string,
}

export interface LoginResponse {
    user:User
}