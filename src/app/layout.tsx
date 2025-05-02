import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const font = Noto_Sans_JP({
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Coming Soon... | 東大寺学園文化祭2025",
    description: "第61回菁々祭公式Webサイトはただいま準備中です。",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body style={{ margin: 0 }} className={font.className}>
                {children}
            </body>
        </html>
    );
}
