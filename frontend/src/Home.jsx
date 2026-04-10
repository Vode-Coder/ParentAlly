import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const cards = [
    { title: "Homework Gap", path: "/homework" },
    { title: "Mental Health & Behaviour", path: "/mental-health" },
    { title: "Information Overload", path: "/information" },
    { title: "Work-Life Balance", path: "/work-life" },
    { title: "Digital Safety", path: "/digital-safety" },
    { title: "Financial Planning", path: "/financial" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className="p-6 border rounded-xl cursor-pointer hover:scale-105 transition shadow"
        >
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="text-gray-500 mt-2">
            Click to explore solutions and insights.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;