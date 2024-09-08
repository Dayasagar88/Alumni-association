import { EyeIcon, EyeOffIcon, FlagIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(true)
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f4f4f4]">
      <main className="flex-1">
        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Login</h1>
                <p className="text-muted-foreground">Sign in to your Alumni Association account</p>
              </div>
              <Card className="w-full max-w-md py-4">
                <CardContent className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type={togglePassword ? "password" : "text"} required />
                    <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
                    {
                        togglePassword ?
                        <EyeOffIcon onClick={() => setTogglePassword(!togglePassword)} className="h-4 w-4" />
                        :
                        <EyeIcon onClick={() => setTogglePassword(!togglePassword)} className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigate("/home")} type="submit" className="w-full bg-[#ff9f1c] text-white hover:bg-[#ffa426]">
                    Login
                  </Button>
                </CardFooter>
              </Card>
              <div className="flex items-center gap-2">
                <div className="h-6 w-10 rounded-full bg-[#f93] flex items-center justify-center">
                  <FlagIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground">
                  {"Don't"} have an account?{" "}
                  <Link to="/signup" className=" text-black hover:underline">
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login