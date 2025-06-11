import Link from "next/link";

// Third-party imports
import { Newspaper } from "lucide-react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <Newspaper className="text-orange-700" />{" "}
      <span className="text-xl font-medium">AuroraNews</span>
    </Link>
  );
};
