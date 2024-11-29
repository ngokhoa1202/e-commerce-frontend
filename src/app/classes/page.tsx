import ClassList from "../_components/classes/ClassList";
const sampleCourses = [
    {
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
  
  export default function Page() {
    return (
      <main className="container mx-auto p-4">
        <ClassList classes={sampleCourses} />
      </main>
    );
  }