import { LoginRequest, RegisterRequest } from "../types/auth"

import axios from "axios"
import { headers } from './utils';

const { REACT_APP_API_URL } = process.env

export const register = (req: RegisterRequest) => {
    return axios.post(`${REACT_APP_API_URL}/users/register`, req, { headers })
}

export const login = (req: LoginRequest) => {
    return axios.post(`${REACT_APP_API_URL}/users/login`, req, { headers })
}