/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MnxZAnkjnT9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-primary to-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between mb-8">
            <Link href="#" className="text-primary-foreground font-bold text-lg" prefetch={false}>
              Home
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                Alumni
              </Link>
              <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                Jobs
              </Link>
              <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                Donations
              </Link>
              <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                Events
              </Link>
              <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                Profile
              </Link>
            </div>
          </nav>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                  Welcome to the Alumni Association
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Connect with fellow alumni, stay up-to-date on events, and get involved in the community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Upcoming Events
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Alumni Association"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our upcoming events and activities to connect with fellow alumni.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-1 rounded-lg bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Alumni Networking Event</div>
                      <Badge variant="secondary">June 15</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Join us for an evening of networking and reconnecting with fellow alumni.
                    </p>
                  </div>
                  <div className="grid gap-1 rounded-lg bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Career Development Workshop</div>
                      <Badge variant="secondary">July 20</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Learn valuable career skills and get advice from experienced alumni.
                    </p>
                  </div>
                  <div className="grid gap-1 rounded-lg bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Alumni Homecoming Celebration</div>
                      <Badge variant="secondary">October 5</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Join us for a weekend of festivities and reconnecting with old friends.
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View All Events
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Alumni Events"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Alumni</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet some of our accomplished alumni and learn about their journeys.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Software Engineer, Acme Inc.</p>
                  <p className="text-muted-foreground">Class of 2015, Computer Science</p>
                </div>
                <p className="text-muted-foreground">
                  John is a successful software engineer who has been instrumental in developing cutting-edge
                  technologies at Acme Inc.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Sarah Anderson</h3>
                  <p className="text-muted-foreground">Entrepreneur, Founder of Startup X</p>
                  <p className="text-muted-foreground">Class of 2012, Business Administration</p>
                </div>
                <p className="text-muted-foreground">
                  Sarah is a successful entrepreneur who founded Startup X, a thriving tech company that has disrupted
                  the industry.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Nonprofit Director, Community Outreach</p>
                  <p className="text-muted-foreground">Class of 2008, Social Work</p>
                </div>
                <p className="text-muted-foreground">
                  Michael is the director of a nonprofit organization that provides essential services to the local
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Involved</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many ways to get involved with the Alumni Association and support our community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <VoteIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Volunteer</h3>
                  <p className="text-muted-foreground">
                    Contribute your time and skills to support our events and initiatives.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <BadgeIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Mentor</h3>
                  <p className="text-muted-foreground">
                    Share your expertise and guide current students and young alumni.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-background p-4">
                <GiftIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Donate</h3>
                  <p className="text-muted-foreground">
                    Support the Alumni Association's initiatives and scholarships.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Alumni Association. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function VoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}