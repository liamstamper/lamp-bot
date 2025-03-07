import { link } from "fs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-3 border-b shadow-sm">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          Lamp 🛋️
        </Link>
      </div>
      <div>
        <Link href={"/howitworks"}>
          <Button className="cursor-pointer">How it Works</Button>
        </Link>
      </div>
    </nav>
  );
}
