import Link from 'next/link';
import AchievementCard from './_components/AchievementCard';
import GoalCard from './_components/GoalCard';

export default function AboutUs() {
  return (
    <>
      {/* Contact Section */}
      <section className="container mx-auto px-12 py-6 text-center border-b-2">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">
          About Us
        </h1>
        <hr />
        <h2 className="text-2xl font-semibold text-blue-700 mt-8 text-center">Welcome to our platform</h2>
        <p className="text-lg text-gray-700 mt-4 text-center w-1/2 mx-auto">
          where we are passionate about&nbsp;
          <span className="font-medium text-blue-600">fulfilling your potential</span>
          <br />
          We do offer&nbsp;
          <span className="text-zinc-500 italic">a wide range of online courses&nbsp;</span>
          designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </section>

      {/* Achievements */}
      <section className="flex-1 container mx-auto px-12 py-6 text-left md:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 self-center">
          Our achievements
        </h2>
        <p className="text-gray-600 text-left">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements.
        </p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          <AchievementCard
            title={<span className="text-blue-500">Trusted by Thousands</span>}
            description="We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
            icon="👑"
          />
          <AchievementCard
            title={<span className="text-blue-500">Award-Winning Courses</span>}
            description="Our courses have received recognition and accolades in the industry for their quality, depth of content,
              and effective teaching methodologies."
            icon="🏆"
          />
          <AchievementCard
            title={<span className="text-blue-500">Positive Student Feedback</span>}
            description="We take pride in the positive feedback we receive from our students, who appreciate the practicality
              and relevance of our course materials."
            icon="👍"
          />
          <AchievementCard
            title={<span className="text-blue-500">Industry Partnerships</span>}
            description="We have established strong partnerships with industry leaders, enabling us to provide our students
              with access to the latest tools and technologies."
            icon="🔗"
          />
        </div>
        <br />
      </section>

      {/* Our Goals */}
      <section className="flex-1 container px-12 py-6 mx-auto p-6 text-left md:text-left">
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
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-20 gap-y-10">
          <GoalCard
            title={<span className="text-blue-500">Provide Practical Skills</span>}
            description="We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners
              with the knowledge and tools needed to excel in their chosen field."
            icon="🛠️"
          />
          <GoalCard
            title={<span className="text-blue-500">Foster Creative Problem-Solving</span>}
            description="We encourage creative thinking and problem-solving abilities, allowing our students
              to tackle real-world challenges with confidence and innovation."
            icon="💡"
          />
          <GoalCard
            title={<span className="text-blue-500">Promote Collaboration and Community</span>}
            description="We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community
              where learners can connect, share insights, and grow together."
            icon="🤝"
          />
          <GoalCard
            title={<span className="text-blue-500">Stay Ahead of the Curve</span>}
            description="The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends.
              We regularly update our course content to ensure our students receive the latest knowledge and skills."
            icon="🚀"
          />
        </div>
      </section>

      {/* Join now */}
      <section className="flex-1 container mx-auto p-6">
        <div className="bg-blue-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-left w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-blue-500 mb-2 md:mb-4">
              Together, let’s shape the future of digital innovation
            </h3>
            <p className="text-gray-600">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <Link
            href="/login"
            className="bg-blue-600 text-white py-2 px-6 rounded-md font-semibold
            hover:bg-blue-600/75 transition mt-4 md:mt-0 md:ml-4"
          >
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
}
