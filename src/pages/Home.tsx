import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ marginBottom: "20px", marginTop: "100px", fontSize: '3em' }}>
          <p>
            One stop shop for{" "}
            <span style={{ fontWeight: "bold" }}>Everyone</span>
          </p>
        </div>
        <Link to="/Store" style={{ display: "block" }}>
          <button
            style={{
              fontSize: "24px",
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
            }}
          >
            Store
          </button>
        </Link>
      </div>
    </>
  );
}
