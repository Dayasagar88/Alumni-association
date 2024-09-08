import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import poster from "../../assets/images/alumni-association-poster.webp";
import event_poster from "../../assets/images/Event-poster.webp";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-[#FF9933]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="my-auto space-y-2">
                <h1 className="lg:leading-tighter text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to the Alumni Association
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Connect with fellow alumni, stay up-to-date on events, and get
                  involved with the community.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    onClick={() => navigate("/signup")}
                    className="bg-green-700 px-8 hover:bg-green-800"
                  >
                    Sign Up
                  </Button>
                  <Button onClick={() => navigate("/login")} className="px-5">
                    Log In
                  </Button>
                </div>
              </div>
              <img
                src={poster}
                alt="Alumni Association"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Upcoming Alumni Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for our upcoming alumni events and connect with fellow
                  graduates.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src={event_poster}
                width="550"
                height="310"
                alt="Alumni Event"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Homecoming Weekend</h3>
                      <p className="text-muted-foreground">
                        Join us for a weekend of festivities, including the
                        annual homecoming game and alumni reunion.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Alumni Networking Event
                      </h3>
                      <p className="text-muted-foreground">
                        Connect with fellow alumni and explore new career
                        opportunities at our networking event.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Alumni Lecture Series
                      </h3>
                      <p className="text-muted-foreground">
                        Hear from distinguished alumni as they share their
                        insights and experiences in our lecture series.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Discover the Benefits of Joining
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As an alumni member, {"you'll"} have access to a wide range of
                resources and opportunities to stay connected with your alma
                mater.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button
                onClick={() => navigate("/signup")}
                className="px-8 bg-[#FF9933] text-black hover:bg-[#ff9933dc]"
              >
                Sign Up
              </Button>
              <Button className=" bg-[#ddd8d2] text-black hover:bg-[#b8b3ae]">
                Learn more
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Connected with Alumni
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our alumni network and stay up-to-date on the latest news,
                events, and opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button className="px-8 bg-[#FF9933] text-black hover:bg-[#ff9933d6]">
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get notified about upcoming events and news.{" "}
                <Link className="underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
