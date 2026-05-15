import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem 1rem",
      }}
    >
      <section
        style={{
          maxWidth: 720,
          width: "100%",
          border: "1px solid rgba(45, 62, 96, 0.15)",
          borderRadius: 16,
          padding: "2rem",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <p style={{ margin: 0, color: "#f06520", fontWeight: 700 }}>404</p>
        <h1 style={{ marginTop: 10 }}>Page not found</h1>
        <p style={{ color: "#4d5f7f", marginBottom: 20 }}>
          The page you are looking for does not exist or may have been moved.
          You can explore our popular PG pages below.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/pg-in-gota-ahmedabad">PG in Gota</Link>
          <Link href="/pg-near-nirma-university">PG near Nirma University</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </main>
  );
}
