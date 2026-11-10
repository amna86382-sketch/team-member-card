import MemberCard from "./components/MemberCard";
import "./App.css";
function App() {
  // Team members ka data
  const members = [
    {
      id: 1,
      name: "Amna Shahid",
      role: "Frontend Developer",
      description: "Creates website designs using HTML, CSS and React."
    },
    {
      id: 2,
      name: "Ali Ahmed",
      role: "Backend Developer",
      description: "Works on server-side programming and databases."
    },
    {
      id: 3,
      name: "Sara Khan",
      role: "UI Designer",
      description: "Designs beautiful and user-friendly interfaces."
    },
    {
      id: 4,
      name: "Usman Malik",
      role: "Web Developer",
      description: "Develops responsive and modern websites."
    },
    {
      id: 5,
      name: "Ayesha Noor",
      role: "Graphic Designer",
      description: "Creates creative graphics and visual designs."
    },
    {
      id: 6,
      name: "Ahmed Raza",
      role: "Project Manager",
      description: "Manages team tasks and project activities."
    }
  ];
  return (
    <div className="container my-5">
      <h1 className="text-center mb-2">
        Our Team Members
      </h1>
      <p className="text-center mb-5">
        Meet our talented team
      </p>
      <div className="row">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}
export default App;