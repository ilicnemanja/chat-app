'use server'

import { loginType } from "@/zod"

export const login = async (loginSchema: loginType) => {
    try {
        const { email, password } = loginSchema

        console.log(`[Server]: User with email ${email} is trying to login with password ${password}`)
        
    } catch (error) {
        console.error(`[Server Error]: ${error}`)
    }
}