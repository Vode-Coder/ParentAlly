import { useNavigate } from "react-router-dom";

function Information() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Information Overload</h1>
      <p>Too many parenting tips can confuse parents.</p>

      <ul>
        <li>Verified expert advice</li>
        <li>Simple explanations</li>
        <li>Filtered content</li>
      </ul>
    </div>
  );
}

export default Information;