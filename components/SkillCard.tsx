interface SkillCardProps {
  skill: string;
  level: string;
  yearsOfExperience: number;
}

export default function SkillCard({ skill, level, yearsOfExperience }: SkillCardProps) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h4 className="text-lg font-semibold mb-1">{skill}</h4>
      <p className="text-gray-600">Proficiency: {level}</p>
      <p className="text-gray-600">Experience: {yearsOfExperience} year(s)</p>
    </div>
  );
}