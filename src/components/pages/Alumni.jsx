import React from 'react'

import { BadgeIcon, GiftIcon, GraduationCapIcon, VoteIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import Header from "../Header"


const Alumni = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <Header/>

    <main className="flex-1">
      {/* Hero */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#FF9933] text-[#FFFFFF]">
        <div className="container px-4 md:px-6 w-full">
          <div className="grid gap-6 mx-auto lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to the Alumni Association
                </h1>
                <p className="max-w-[600px] text-[#FFFFFF] md:text-xl">
                  Connect with fellow alumni, find job opportunities, and support your alma mater.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <p
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#138808] px-8 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#138808]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  Join Now
                </p>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI="
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>


      {/* Featured alumni */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Alumni</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the inspiring stories and achievements of our alumni community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                  width="80"
                  height="80"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">Class of 2010</p>
                <p className="line-clamp-3 text-muted-foreground">
                  John is a successful entrepreneur who founded a tech startup that was acquired by a major tech
                  company. He is passionate about mentoring young alumni and giving back to the community.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  View Profile
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
                  width="80"
                  height="80"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Class of 2015</p>
                <p className="line-clamp-3 text-muted-foreground">
                  Jane is a passionate advocate for social justice and has founded a non-profit organization that
                  provides educational resources to underserved communities. She is a frequent speaker at alumni
                  events.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  View Profile
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"
                  width="80"
                  height="80"
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Michael Johnson</h3>
                <p className="text-muted-foreground">Class of 2018</p>
                <p className="line-clamp-3 text-muted-foreground">
                  Michael is a rising star in the field of renewable energy. He has been recognized for his innovative
                  work in developing sustainable energy solutions for local communities.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  View Profile
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for our upcoming alumni events and connect with fellow graduates.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFsdW1uaSUyME5ldHdvcmtpbmclMjBFdmVudHxlbnwwfHwwfHx8MA%3D%3D"
                  width="400"
                  height="225"
                  alt="Event"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Alumni Networking Event</h3>
                <p className="text-muted-foreground">June 15, 2023</p>
                <p className="line-clamp-3 text-muted-foreground">
                  Join us for an evening of networking and reconnecting with fellow alumni. Enjoy drinks, hors
                  oeuvres, and the chance to meet new people.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  Learn More
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://plus.unsplash.com/premium_photo-1705407454980-4b8b64d068b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fENhcmVlciUyMERldmVsb3BtZW50JTIwV29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
                  width="400"
                  height="225"
                  alt="Event"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Career Development Workshop</h3>
                <p className="text-muted-foreground">July 20, 2023</p>
                <p className="line-clamp-3 text-muted-foreground">
                  Attend our career development workshop and learn valuable skills to advance your professional goals.
                  Network with alumni and industry experts.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  Learn More
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1599943821034-8cb5c7526922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWx1bW5pJTIwSG9tZWNvbWluZyUyMENlbGVicmF0aW9ufGVufDB8fDB8fHww"
                  width="400"
                  height="225"
                  alt="Event"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Alumni Homecoming Celebration</h3>
                <p className="text-muted-foreground">October 5, 2023</p>
                <p className="line-clamp-3 text-muted-foreground">
                  Join us for our annual homecoming celebration and reconnect with old friends, enjoy live music, and
                  reminisce about your time on campus.
                </p>
              </CardContent>
              <CardFooter>
                <p
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
                >
                  Learn More
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Get involed */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-mute">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center  justify-center space-y-4 text-center">
            <div className="space-y-2 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Involved</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways to get involved with the Alumni Association and support our community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center shadow-lg space-y-4 rounded-lg bg-background p-4">
              <VoteIcon className="h-12 w-12 text-primary" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Volunteer</h3>
                <p className="text-muted-foreground">
                  Contribute your time and skills to support our events and initiatives.
                </p>
              </div>
              <Button
                href="#"
                className="bg-[#FF9933]"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col justify-center shadow-lg space-y-4 rounded-lg bg-background p-4">
              <BadgeIcon className="h-12 w-12 text-primary" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Mentor</h3>
                <p className="text-muted-foreground">
                  Share your expertise and guide current students and young alumni.
                </p>
              </div>
              <Button
                href="#"
                className="bg-[#FF9933]"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col justify-center shadow-lg space-y-4 rounded-lg bg-background p-4">
              <GiftIcon className="h-12 w-12 text-primary" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Donate</h3>
                <p className="text-muted-foreground">
                  Support the Alumni Association initiatives and scholarships.
                </p>
              </div>
              <Button
                href="#"
                className="bg-[#FF9933]"
              >
                Learn More
              </Button>
            </div>
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