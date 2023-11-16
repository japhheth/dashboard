import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { LayoutProp } from "@/app/lib/definitions";

const RootLayout = ({ children }: LayoutProp) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
