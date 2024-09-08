
import { BriefcaseIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import Header from "../common/Header"
import poster from "../../assets/images/job-poster.webp";
import Footer from "../common/Footer";

export default function Jobs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#FF9933] text-[#FFFFFF]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Alumni Jobs</h1>
                  <p className="max-w-[600px] text-[#FFFFFF] md:text-xl">
                    Find your next career opportunity with our alumni job board.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    href="#"
                    className="bg-green-700"
                    
                  >
                    Post a Job
                  </Button>
                  <Button
                    href="#"
                    className=""
                    
                  >
                    Browse Jobs
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

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Job Listings</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the latest job opportunities from our alumni network.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <BriefcaseIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-muted-foreground">ABC Tech Company</p>
                  <p className="line-clamp-3 text-muted-foreground">
                    We are seeking a talented software engineer to join our growing team. Responsibilities include
                    developing new features, optimizing existing systems, and collaborating with cross-functional teams.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Apply Now
                  </p>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <BriefcaseIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Marketing Manager</h3>
                  <p className="text-muted-foreground">XYZ Corp</p>
                  <p className="line-clamp-3 text-muted-foreground">
                    We are seeking an experienced marketing manager to lead our digital marketing initiatives.
                    Responsibilities include developing and executing marketing campaigns, analyzing data, and
                    collaborating with cross-functional teams.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Apply Now
                  </p>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="bg-[#FF9933] p-4 rounded-full">
                    <BriefcaseIcon className="h-8 w-8 text-[#FFFFFF]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Product Manager</h3>
                  <p className="text-muted-foreground">Acme Inc</p>
                  <p className="line-clamp-3 text-muted-foreground">
                    We are seeking a talented product manager to join our team. Responsibilities include defining
                    product strategy, managing the product roadmap, and collaborating with cross-functional teams to
                    deliver innovative solutions.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Apply Now
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Alumni Job Search Tips</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the inside scoop on how to land your dream job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <BriefcaseIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Networking</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Leverage your alumni network to find job opportunities and get your foot in the door.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </p>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <BriefcaseIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Resume Tips</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Craft a standout resume that highlights your unique skills and experiences.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </p>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <BriefcaseIcon className="h-12 w-12 text-[#FF9933]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Interview Prep</h3>
                  <p className="line-clamp-3 text-muted-foreground">
                    Ace your interviews with our expert tips and strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <p
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

      </main>
      
      
    </div>
  )
}

