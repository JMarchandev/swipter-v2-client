import * as UserApi from './api/user'

import { LoginRequest, RegisterRequest } from './types/auth'

import { toast } from 'react-hot-toast';

export const register = async (req: RegisterRequest) => {
    try {
        const response = await UserApi.register(req);
        return response.data
    } catch (err: any) {
        const error = err.response.data
        toast["error"](Object.values(error.data).map((erro: any) => erro.toString()).join(' '), { duration: 2000 });
    }
}

export const login = async (req: LoginRequest) => {
    try {
        const response = await UserApi.login(req);
        return response.data
    } catch (err: any) {
        const error = err.response.data
        toast["error"](error.data.error, { duration: 2000 });
    }
}