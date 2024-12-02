import Image from "next/image";
import coverImage from "../../_assets/course-cover.png"
import CurriculumCard from "../../_components/class-detail/CurriculumCard";

const course = {
  title: "Introduction to Web Development",
  description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
  classLink: "/intro-web-dev",
  curriculum: [
    {
      week: 1,
      description: "HTML Basics",
      title: "HTML Basics",
      lessons: [{ title: "HTML5", etc: "1 hour"}, { title: "Tags", etc: "2 hours" }],
    },
    {
      week: 2,
      description: "CSS Basics",
      title: "CSS Basics",
      lessons: [{ title: "Styling with CSS", etc: "1 hour"}, { title: "CSS selectors", etc: "30 minutes" }],
    },
    {
      week: 3,
      description: "JS Basics",
      title: "JS Basics",
      lessons: [{ title: "JavaScript syntax", etc: "1 hour"}, { title: "DOM", etc: "30 minutes" }],
    },
  ],
};

export default async function Page({ params }: { params: Promise<{ slug: string }>}) {
  console.log((await params).slug);
  return (
    <main className="container mx-auto p-8 max-w-[1400px] flex flex-col gap-8">
      <div className="grid grid-cols-2 py-4 gap-4">
        <p className="text-4xl font-bold">{course.title}</p>
        <p>{course.description}</p>
      </div>
      <hr/>
      <Image alt="Cover" src={coverImage} className="my-8"/>
      <div className="grid grid-cols-2 gap-8">
        {course.curriculum.map((week, idx) => (
          <CurriculumCard key={idx} curriculum={week} />
        ))}
      </div>
    </main>
  );
}
