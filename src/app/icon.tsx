import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16181d",
          color: "#f8f7f4",
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        DV
      </div>
    ),
    size
  );
}
