import { ImageResponse } from "next/og";

export const alt = "Aidan Brown: cloud and on-prem infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#111110",
        color: "#ede9e0",
        padding: 80,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 600,
            letterSpacing: -5,
            lineHeight: 1,
          }}
        >
          Aidan Brown
          <span style={{ color: "#4cb0ff" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 40, color: "#8a867e" }}>
          Cloud and on-prem infrastructure
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 32, color: "#8a867e", fontFamily: "monospace" }}>
        adnb.dev
      </div>
    </div>,
    { ...size },
  );
}
