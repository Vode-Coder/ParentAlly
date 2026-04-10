import { useNavigate } from "react-router-dom";

function WorkLife() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Work-Life Balance</h1>
      <p>Balance job and parenting responsibilities.</p>

      <ul>
        <li>Time management tips</li>
        <li>Daily planner</li>
        <li>Stress reduction</li>
      </ul>
    </div>
  );
}

export default WorkLife;