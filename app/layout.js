import "./globals.css";

export const metadata = {
  title: "Machine coding application for interview",
  description: "Generate a machine coding application for your interview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
