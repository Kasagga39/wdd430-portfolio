import Image from "next/image";
import ProjectList from "@/components/ProjectList";

const projects = [
{
    title: "AnkaMovies",
    description: "A movie discovery app that lets users browse, search, and view details of popular movies.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://kasagga39.github.io/ankamovies/",
    type: "Frontend",
  },
  {
    title: "E-Commerce API",
    description: "A RESTful API for managing products, orders, and users with authentication and database integration.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://eventnexus-api-g95e.onrender.com/login",
    type: "Backend",
  },
];
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <div className="mb-6">
          <Image
            src="/images/profile.jpg"
            alt="Profile photo"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am kasagga frank a developer learning Next.js and React at BYU-Pathway. Here are some of my frontend and backend projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}