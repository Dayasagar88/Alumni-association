import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Mail, MapPin, Smartphone } from 'lucide-react'

const Contact = () => {
  return (
    <main className="flex-1 ">
    <div className="w-full  px-5 min-h-[100dvh]  py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
      <h1 className="sm:text-5xl text-3xl font-bold text-center mb-5 pt-3">Contact Us</h1>
      <div className="grid lg:w-1/2 mx-auto gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and {"we'll"} get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" placeholder="johndoe@example.com" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message here..." required />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#ff9f1c] hover:bg-[#ffa426]">Send Message</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can also reach us using the following contact details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Smartphone className="text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-muted-foreground" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-muted-foreground" />
              <span>123 Example Street, City, State 12345</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center text-sm text-muted-foreground">
              Business Hours: Monday - Friday, 9AM - 5PM EST
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </main>
  )
}

export default Contact