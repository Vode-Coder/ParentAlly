import { useNavigate } from "react-router-dom";

function MentalHealth() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Mental Health & Behaviour</h1>
      <p>Track and improve your child’s emotional well-being.</p>

      <ul>
        <li>Mood tracking</li>
        <li>Behavior insights</li>
        <li>Parent guidance tips</li>
      </ul>
    </div>
  );
}

export default MentalHealth;