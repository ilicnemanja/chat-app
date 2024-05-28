"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { registerSchema, registerType } from '@/zod'
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
import { register } from '@/actions/register.action'
import Link from 'next/link'

const RegisterForm = () => {

    const form = useForm<registerType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    })

    const onSubmit = async (values: registerType) => {
      try {
        // await register(values)
      } catch (error) {
        console.error('Register failed:', error)
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>
                First name is required and must be at least 2 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormDescription>
                Last name is required and must be at least 2 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                Username is required and must be at least 2 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Confirm password is required and must match the password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type="submit">Register</Button>
      </form>

      <div className='flex flex-row gap-2 justify-center items-center mt-10 mb-4'>
        <span>Already have an account?</span>
        <Link className='underline text-blue-500' href='/login'>Login</Link>
      </div>
    </Form>
  )
}

export default RegisterForm