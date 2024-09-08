import { BriefcaseIcon, CalendarIcon, GiftIcon,MailOpenIcon, PhoneIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../common/Header'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <Header/>
    <main className="flex-1">
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Your Profile</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  View and manage your alumni association profile.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:justify-start justify-between min-[400px]:flex-row">
                <div className='flex gap-2'>
                <Button
                  className="bg-[#FF9933]"
                >
                  Edit Profile
                </Button>
                <Button
                  
                >
                  Account Settings
                </Button>
                </div>
               
                <Button
                onClick={() => navigate("/")}
                  variant="ghost"
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                >
                  Logout
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <div className="relative h-32 bg-muted rounded-t-lg overflow-hidden">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bVcPNq-HujfJEYAb6H1G1yHOK4rM0YJeZQ&s" alt="Banner" className="object-cover w-full" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border-4 border-background">
                    <AvatarImage src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Class of 2015</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MailOpenIcon className="h-4 w-4" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <PhoneIcon className="h-4 w-4" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BriefcaseIcon className="h-4 w-4" />
                    <span>Software Engineer at Acme Inc.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">About</h4>
                  <p className="text-sm text-muted-foreground">
                    I am a proud alumnus of the university, where I studied computer science and was involved in the
                    student government. After graduating, I went on to work as a software engineer at a leading tech
                    company. In my free time, I enjoy hiking, reading, and volunteering at local charities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Involvement</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out your involvement with the alumni association and see how you can get more involved.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                  <CalendarIcon className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Events Attended</h3>
                <p className="text-muted-foreground">You have attended 5 alumni events in the past year.</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  View Events
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                  <BriefcaseIcon className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Job Postings</h3>
                <p className="text-muted-foreground">
                  You have applied to 3 job postings through the alumni association.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  View Jobs
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                  <GiftIcon className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Donations</h3>
                <p className="text-muted-foreground">You have made 2 donations to the alumni association.</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  View Donations
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>


    
  </div>
  )
}

export default Profile