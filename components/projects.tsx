import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <div
      className="container min-h-screen bg-slate-50 px-5 py-20 md:px-10"
      id="projects"
    >
      <div className="mb-10 w-full text-center">
        <h1 className="mb-2 text-3xl font-extrabold">My Projects</h1>
        <p>Here are the projects that I have worked on.</p>
      </div>
      <ProjectCard
        name="OSIS SMK TELKOM Makassar"
        image="/osis.png"
        desc="School organization website that show the leader and the members"
        linkdemo="https://osis-smktelkom-makassar.vercel.app/"
        isOdd={false}
      />
      <ProjectCard
        name="Kantor Jasa Penilai Publik (KJPP)"
        image="/kjpp.png"
        desc="A web that show propertys that for sale."
        linkdemo="https://kjpp-client.vercel.app/login"
        isOdd={true}
      />
      <ProjectCard
        name="Present"
        image="/present.png"
        desc="A web like google classroom but just a absentee features for worker."
        linkdemo="https://present-client-green.vercel.app"
        isOdd={false}
      />
    </div>
  );
}
