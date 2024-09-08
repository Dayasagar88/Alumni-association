import { CalendarIcon, ClockIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Link } from 'react-router-dom'
import Header from '../common/Header'
import { Button } from '../ui/button'
import poster from "../../assets/images/events-poster.jpg"


const Events = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <Header/>
      <main className="flex-1">

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-[#FF9933] text-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Upcoming Events</h1>
                  <p className="max-w-[600px] text-[#FFFFFF] md:text-xl">Check out our upcoming events and join us!</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="bg-green-700"
                  >
                    Create Event
                  </Button>
                  <Button
                    
                  >
                    View All Events
                  </Button>
                </div>
              </div>
              <img
                src={poster}
                width="550"
                height="550"
                alt="Events"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our upcoming events and join us to connect with fellow alumni.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhDJxqIAosTGOLOY1T14I3ZuCVS-3JJD7Pg&s"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Alumni Networking Event</h3>
                  <p className="text-muted-foreground">
                    Join us for an evening of networking and reconnecting with fellow alumni.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 15, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>6:00 PM - 9:00 PM</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel73WJyZ0GKqE6GjQOmYsoZtnVIjtKOtkkQ&s"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Career Development Workshop</h3>
                  <p className="text-muted-foreground">
                    Improve your job search skills and learn from industry experts.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>July 20, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDM8XeXPsCpmUG0J5TDoYXHN9AKcQXzlYiw&s"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Homecoming Celebration</h3>
                  <p className="text-muted-foreground">
                    Join us for a weekend of festivities and reconnecting with old friends.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>October 12-14, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>All Weekend</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Past Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our past events and see how you can get involved.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Alumni Gala</h3>
                  <p className="text-muted-foreground">
                    A formal event to celebrate our alumni and their achievements.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>May 5, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>6:00 PM - 11:00 PM</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SLQcGOZZYvzBGeI3XLGk0eX8W2D2zoO98Q&s"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Alumni Mentorship Program</h3>
                  <p className="text-muted-foreground">
                    Connect with experienced alumni and get guidance on your career.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>March 1 - May 31, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>Ongoing</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGPBoxnTAMZSHnr8rVc6C1XdQ57boULlbrg&s"
                    width="400"
                    height="200"
                    alt="Event Image"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Alumni Reunion</h3>
                  <p className="text-muted-foreground">
                    Reconnect with old friends and reminisce about your time on campus.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 1-3, 2023</span>
                    <ClockIcon className="h-4 w-4" />
                    <span>All Weekend</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>


      
    </div>
  )
}

export default Events