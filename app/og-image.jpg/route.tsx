import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(11,26,61) 0%, rgb(22,45,94) 55%, rgb(240,101,32) 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: 1 }}>
          Unoloft
        </div>
        <div
          style={{ fontSize: 34, marginTop: 14, maxWidth: 960, textAlign: "center" }}
        >
          Premium PG Accommodation in Ahmedabad
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
