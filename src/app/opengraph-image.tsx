import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Amble makes everyday movement feel worth looking forward to";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [appIconFile, lumiFile] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/app-icon.png")),
    readFile(join(process.cwd(), "public/brand/lumi-cheering.png")),
  ]);
  const appIcon = `data:image/png;base64,${appIconFile.toString("base64")}`;
  const lumi = `data:image/png;base64,${lumiFile.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#FAFAF7",
        color: "#1A1A2E",
        display: "flex",
        fontFamily: "Arial Rounded MT Bold, Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "68px 76px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#E0F7F5",
          borderRadius: "999px",
          height: 520,
          position: "absolute",
          right: -80,
          top: 74,
          width: 650,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", width: 670 }}>
        <div style={{ alignItems: "center", display: "flex", gap: 18, marginBottom: 44 }}>
          <img src={appIcon} width={76} height={76} alt="" style={{ borderRadius: 20 }} />
          <span style={{ fontSize: 42, fontWeight: 800 }}>Amble</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 70,
            fontWeight: 800,
            letterSpacing: -3.5,
            lineHeight: 1.04,
          }}
        >
          Make movement feel like something to
          <span style={{ color: "#E84A4A", display: "flex" }}>look forward to.</span>
        </div>
      </div>
      <img
        src={lumi}
        width={420}
        height={420}
        alt=""
        style={{ objectFit: "contain", position: "absolute", right: 24, top: 126 }}
      />
      <div
        style={{
          background: "#FFB347",
          borderRadius: 999,
          bottom: 50,
          height: 32,
          left: 76,
          position: "absolute",
          width: 210,
        }}
      />
    </div>,
    size,
  );
}
