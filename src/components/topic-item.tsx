import Link from "next/link";

interface TopicItemProps {
  label: string;
  href: string;
}

export const TopicItem = ({ label, href }: TopicItemProps) => {
  return (
    <Link
      href={`/topic/${href}`}
      className="bg-muted rounded-full px-4 py-2 text-sm transition duration-300 hover:bg-lime-700 hover:text-white dark:hover:bg-lime-700"
    >
      {label}
    </Link>
  );
};
