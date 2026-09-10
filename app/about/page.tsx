import SkillCard from "@/components/SkillCard";

const skills = [
  { skill: "TypeScript", level: "Intermediate", yearsOfExperience: 2 },
  { skill: "React", level: "Intermediate", yearsOfExperience: 2 },
  { skill: "Next.js", level: "Beginner", yearsOfExperience: 1 },
  { skill: "Tailwind CSS", level: "Intermediate", yearsOfExperience: 2 },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I am a developer focused on web technologies and building modern applications with React and Next.js.
      </p>
      <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <SkillCard
            key={s.skill}
            skill={s.skill}
            level={s.level}
            yearsOfExperience={s.yearsOfExperience}
          />
        ))}
      </div>
    </main>
  );
}