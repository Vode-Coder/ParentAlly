import { useNavigate } from "react-router-dom";

function Homework() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Homework Gap</h1>
      <p>Parents often struggle to help with difficult homework.</p>

      <ul>
        <li>AI homework assistance</li>
        <li>Step-by-step solutions</li>
        <li>Concept clarity tools</li>
      </ul>
    </div>
  );
}

export default Homework;