import { useNavigate } from "react-router-dom";

function Financial() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Financial Planning</h1>
      <p>Plan your child’s future expenses.</p>

      <ul>
        <li>Education savings</li>
        <li>Budget planning</li>
        <li>Investment tips</li>
      </ul>
    </div>
  );
}

export default Financial;