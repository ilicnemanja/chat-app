'use server'

import { registerType } from "@/zod"

export const register = async (registerSchema: registerType) => {
    try {
        const { firstName, lastName, username, email, password, confirmPassword } = registerSchema

        console.log(`[Server]: Registering user with data: ${firstName}, ${lastName}, ${username}, ${email}, ${password}, ${confirmPassword}`)
        
    } catch (error) {
        console.error(`[Server Error]: ${error}`)
    }
}