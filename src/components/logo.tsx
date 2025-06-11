import Link from "next/link";

// Third-party imports
import { Rss } from "lucide-react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <Rss className="text-lime-700" />{" "}
      <span className="text-xl font-medium">AuroraNews</span>
    </Link>
  );
};
