import React from 'react'

const About = () => {
  return (
    <main className="flex-1">
      <section className="w-full min-h-[100dvh] flex justify-center py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="text-muted-foreground">Learn more about the Alumni Association</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  The Alumni {"Association's"} mission is to foster a lifelong connection between our university and its
                  graduates. We aim to support our alumni community, promote the {"university's"} interests, and contribute
                  to the {"institution's"} continued success.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-muted-foreground">
                  The Alumni Association was founded in 1985 with the goal of bringing together graduates from all
                  backgrounds and disciplines. Over the years, we have grown to become a vibrant community of over
                  50,000 alumni, united by their shared experiences and commitment to the university.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
                <p className="text-muted-foreground">
                  The Alumni Association offers a wide range of programs and events to engage our members, including
                  networking opportunities, professional development workshops, social gatherings, and volunteer
                  initiatives. We are dedicated to supporting our alumni throughout their personal and professional
                  journeys.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
                <p className="text-muted-foreground">
                  Whether {"you're "}a recent graduate or have been part of our community for decades, we encourage you to
                  get involved with the Alumni Association. Attend our events, volunteer your time, or consider joining
                  our leadership team. Together, we can make a lasting impact on our university and our alumni network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About