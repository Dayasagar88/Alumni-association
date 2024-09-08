import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Contact = () => {
  return (
    <main className="flex-1 ">
    <section className="w-full flex justify-center py-12 md:py-24 min-h-[100dvh] lg:py-32 bg-[#f4f4f4]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333]">Contact Us</h1>
            <p className="text-[#666]">Get in touch with the Alumni Association</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#333]">Our Office</h2>
              <p className="text-[#666]">
                123 University Ave
                <br />
                Anytown, USA 12345
                <br />
                Phone: (555) 555-5555
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#333]">Get in Touch</h2>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-[#666]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="border-[#ccc] focus:border-[#f79f1f] focus:ring-[#f79f1f]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#666]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-[#ccc] focus:border-[#f79f1f] focus:ring-[#f79f1f]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-[#666]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="border-[#ccc] focus:border-[#f79f1f] focus:ring-[#f79f1f]"
                  />
                </div>
                <Button type="submit" className="bg-[#f79f1f] hover:bg-[#e68f1c] text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Contact