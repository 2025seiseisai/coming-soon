import Image from "next/image";
import BackgroundImage from "./bg.webp";
export default function Home() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Image
                src={BackgroundImage}
                alt="Background"
                quality={50}
                style={{
                    position: "absolute",
                    width: "100svw",
                    height: "100svh",
                    objectFit: "cover",
                    display: "block",
                }}
            />
            <div style={{ position: "absolute", height: "100svh", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0, width: "100svw", textAlign: "center", color: "white", fontSize: "calc(min(5svw,8svh))", fontWeight: 700, textShadow: "0 3px 15px black" }}>
                    第61回菁々祭公式Webサイトは<br></br>ただいま鋭意製作中です！
                </p>
            </div>
        </div>
    );
}
