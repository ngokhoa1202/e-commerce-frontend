export default function AboutUs() {
  return (
    <>
      {/* Contact Section */}
      <section className="flex-1 container mx-auto p-6 text-center md:text-left border-b-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 self-center">
            About Us
          </h1>
          <p className="text-lg text-gray-600 mb-8 mx-auto md:mx-0 text-left md:text-left max-w-md md:max-w-2xl">
            Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="flex-1 container mx-auto p-6 text-left md:text-left border-b-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 self-center">
          Achievements
        </h2>
        <p className="text-gray-600 text-left">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AchievementCard
            title="Trusted by Thousands"
            description="We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
            icon="👑"
          />
          <AchievementCard
            title="Award-Winning Courses"
            description="Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
            icon="🏆"
          />
          <AchievementCard
            title="Positive Student Feedback"
            description="We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
            icon="👍"
          />
          <AchievementCard
            title="Industry Partnerships"
            description="We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies."
            icon="🔗"
          />
        </div>
        <br></br>
      </section>

      {/* Our Goals */}
      <section className="flex-1 container mx-auto p-6 text-left md:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 self-center">
          Our Goals
        </h2>
        <p className="text-gray-600 text-left">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.
        </p>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GoalCard
            title="Provide Practical Skills"
            description="We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
            icon="🛠️"
          />
          <GoalCard
            title="Foster Creative Problem-Solving"
            description="We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
            icon="💡"
          />
          <GoalCard
            title="Promote Collaboration and Community"
            description="We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
            icon="🤝"
          />
          <GoalCard
            title="Stay Ahead of the Curve"
            description="The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
            icon="🚀"
          />
        </div>
      </section>

      {/* Join now */}
      <section className="flex-1 container mx-auto p-6">
        <div className="bg-orange-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-left w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-orange-600 mb-2 md:mb-4">
              Together, let’s shape the future of digital innovation
            </h3>
            <p className="text-gray-600">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-600 transition mt-4 md:mt-0 md:ml-4">
            Join Now
          </button>
        </div>
      </section>
    </>
  );
}

function AchievementCard({ title, description, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-4 font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function GoalCard({ title, description, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-4 font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
