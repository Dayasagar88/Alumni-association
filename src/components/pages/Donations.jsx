
import { GiftIcon} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import Header from "../common/Header"
import { Link } from "react-router-dom"
import poster from "../../assets/images/donation-poster.png"

export default function Donations() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-[#FF9933] text-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Alumni Donations</h1>
                  <p className="max-w-[600px] text-[#FFFFFF] md:text-xl">
                    Support your alma mater and make a donation today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    href="#"
                    className="bg-green-700"
                    
                  >
                    Make a Donation
                  </Button>
                  <Button
                    href="#"
                    className=""
                    
                  >
                    Donation History
                  </Button>
                </div>
              </div>
              <img
                src={poster}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Donation Opportunities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the different ways you can support your alma mater.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <GiftIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Scholarship Fund</h3>
                  <p className="text-muted-foreground">
                    Support students in need with a donation to our scholarship fund.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Donate Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <GiftIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Campus Improvements</h3>
                  <p className="text-muted-foreground">Help us upgrade and maintain our campus facilities.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Donate Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <GiftIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Faculty Support</h3>
                  <p className="text-muted-foreground">Contribute to our faculty development and research programs.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Donate Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Give Back?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donations make a real difference in the lives of our students and faculty.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <GiftIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Student Support</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Your donations help us provide scholarships, financial aid, and other resources to support our
                    students.
                  </p>
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
                  <GiftIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Campus Improvements</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Your donations help us maintain and upgrade our campus facilities, creating a better learning
                    environment for all.
                  </p>
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
                  <GiftIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Faculty Support</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Your donations help us attract and retain top-notch faculty, enabling them to continue their
                    important work.
                  </p>
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

