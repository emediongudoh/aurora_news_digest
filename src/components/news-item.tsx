import Image from "next/image";
import Link from "next/link";

// Third-party imports
import moment from "moment";

interface NewsItemProps {
  article: {
    author?: string;
    description: string;
    publishedAt: string;
    source: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  };
}

export const NewsItem = ({ article }: NewsItemProps) => {
  const { urlToImage, title, description, url, author, publishedAt, source } =
    article;

  return (
    <div className="rounded-md border bg-white dark:bg-[#171717]">
      <Link
        href={url}
        className="group relative"
      >
        <Image
          src={urlToImage}
          alt={title}
          width={1200}
          height={800}
          className="h-60 w-full rounded-t-md object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 m-auto flex max-h-fit max-w-[70%] items-center justify-center rounded-md bg-black/70 p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-center">{description?.substring(0, 120)}...</p>
        </div>

        <span className="absolute right-4 bottom-4 rounded-md bg-orange-700 px-2 py-1 text-sm text-white">
          {source.name}
        </span>
      </Link>

      <div className="flex flex-col gap-4 p-4">
        <Link
          href={url}
          className="text-xl hover:underline hover:transition hover:duration-300"
        >
          {title?.substring(0, 60)}...
        </Link>
        <p className="flex items-center justify-between text-sm">
          <span className="text-sm font-medium">
            by {author || source.name}
          </span>{" "}
          <span className="text-muted-foreground">
            {moment(publishedAt).fromNow()}
          </span>
        </p>
      </div>
    </div>
  );
};
