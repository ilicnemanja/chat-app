"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { loginSchema, loginType } from '@/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from '@/actions/login.action'
import Link from 'next/link'

const LoginForm = () => {

    const form = useForm<loginType>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: '',
        password: ''
      }
    })

    const onSubmit = async (values: loginType) => {
      try {
        // await login(values)
      } catch (error) {
        console.error('Login failed:', error)
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Email is required and must be a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Password is required and must be at least 8 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type="submit">Login</Button>
        <Link className='flex justify-center mt-4 text-sm text-gray-800' href='/forgot-password'>Forgot Password</Link>
      </form>

      <div className='flex flex-row gap-2 justify-center items-center mt-10'>
        <p>Don&apos;t have an account?</p>
        <Link className='underline text-blue-500' href='/register'>Register</Link>
      </div>
    </Form>
  )
}

export default LoginForm