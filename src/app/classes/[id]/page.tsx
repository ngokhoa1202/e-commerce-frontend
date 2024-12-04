import Image from "next/image";
import coverImage from "../../_assets/course-cover.png"
import CurriculumCard from "../../_components/classes/CurriculumCard";

const courseSample = {
  id: 1,
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

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } = (await params);
  const course = await fetch(`https://tienclay.me/ecommerce/courses/${id}`);
  console.log(course);
  return (
    <main className="container mx-auto p-8 max-w-[1400px] flex flex-col gap-8">
      <div className="grid grid-cols-2 py-4 gap-4">
        <h1 className="text-4xl font-bold">{courseSample.title}</h1>
        <p>{courseSample.description}</p>
      </div>
      <hr/>
      {/* <Image alt="Cover" src={coverImage} className="my-8"/> */}
      <div className="grid grid-cols-2 gap-8">
        {courseSample.curriculum.map((week, idx) => (
          <CurriculumCard key={idx} curriculum={week} />
        ))}
      </div>
    </main>
  );
}
