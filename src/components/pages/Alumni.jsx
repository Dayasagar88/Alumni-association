import React from 'react'
import { BadgeIcon, GiftIcon, GraduationCapIcon, VoteIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import Header from "../Header"
import { Link } from 'react-router-dom'


const Alumni = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="lg:gap-12  xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center items-center text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Alumni Directory</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse and connect with fellow alumni.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#FF9933] px-8 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Search Alumni
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Connect with Alumni
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex justify-center lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Alumni Spotlight</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about the amazing accomplishments of our alumni.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">Class of 2010, CEO of Acme Inc.</p>
                  <p className="text-muted-foreground">
                    Jane is a successful entrepreneur who founded Acme Inc., a leading technology company. She is a
                    passionate advocate for women in tech and mentors young entrepreneurs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Class of 2012, Researcher at Acme Labs</p>
                  <p className="text-muted-foreground">
                    Michael is a brilliant researcher who has made significant contributions to the field of renewable
                    energy. He is passionate about finding sustainable solutions to combat climate change.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Sarah Lee</h3>
                  <p className="text-muted-foreground">Class of 2015, Social Entrepreneur</p>
                  <p className="text-muted-foreground">
                    Sarah is a passionate social entrepreneur who founded a non-profit organization that provides
                    educational opportunities for underprivileged children. She is committed to making a positive impact
                    in her community.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Alumni Association. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <p href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </p>
          <p href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </p>
        </nav>
      </footer>
   
    </div>
  )
}

export default Alumni