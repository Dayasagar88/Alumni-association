import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { EyeIcon, EyeOffIcon, FlagIcon} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Signup() {

  const [togglePassword, setTogglePassword] = useState(true)
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true);



  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f4f4f4]">
      <main className="flex-1">
        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col w-full items-center justify-center space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sign Up</h1>
                <p className="text-muted-foreground">Join the ADGIPS Alumni Association</p>
              </div>
              <Card className="w-full max-w-md py-4">
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="college-id">College ID</Label>
                      <Input id="college-id" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select id="role">
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alumni">Alumni</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
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
                  <div className="space-y-2 relative">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type={toggleConfirmPassword ? "password" : "text"} required />
                    <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
                      {
                        toggleConfirmPassword ?
                        <EyeOffIcon onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)} className="h-4 w-4" />
                        :
                        <EyeIcon onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)} className="h-4 w-4" />
                      }
                      
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pb-1">
                  <Button type="submit" className="w-full bg-[#ff9f1c] text-white hover:bg-[#ffa426]">
                    Sign Up
                  </Button>
                  <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className=" text-black hover:underline">
                    Login
                  </Link>
                </p>
                </CardFooter>
              </Card>
              <div className="flex items-center gap-2">
                <div className="h-6 w-10 rounded-full bg-[#f93] flex items-center justify-center">
                  <FlagIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground">Join the ADGIPS Alumni Association</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}