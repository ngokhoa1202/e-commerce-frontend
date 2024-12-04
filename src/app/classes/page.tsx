import ClassList from "../_components/classes/ClassList";
const sampleCourses = [
    {
      id: "1",
      title: "Introduction to Web Development",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
      classLink: "/course-details/intro-web-dev",
      curriculum: [
        { week: 1, description: "HTML Basics" },
        { week: 2, description: "CSS Styling" },
        { week: 3, description: "JavaScript Introduction" },
        { week: 4, description: "Project Building" },
      ],
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript and explore ES6+ features.",
      classLink: "/course-details/advanced-js",
      curriculum: [
        { week: 1, description: "Async JavaScript" },
        { week: 2, description: "Functional Programming" },
        { week: 3, description: "ES6+ Features" },
      ],
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      description: "Master the basics of UI/UX design, focusing on user-centered design.",
      classLink: "/course-details/ui-ux",
      curriculum: [
        { week: 1, description: "Understanding Users" },
        { week: 2, description: "Design Principles" },
        { week: 3, description: "Prototyping and Testing" },
      ],
    },
  ];

export default async function Page() {
  const courses = await fetch("https://tienclay.me/ecommerce/courses");
  console.log(courses);
  return (
    <section className="container mx-auto p-4">
      <h1 className="font-bold text-4xl text-center mt-12">Our classes</h1>
      <ClassList classes={sampleCourses} />
    </section>
  );
}
