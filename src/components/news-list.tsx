import useSWR from "swr";

// Third-party imports
import { LoaderCircle } from "lucide-react";

// Local imports
import { NewsItem } from "./news-item";

type NewsListProps = {
  topic: string;
};

type Article = {
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

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const NewsList = ({ topic }: NewsListProps) => {
  const { data: articles = [], isLoading } = useSWR(
    `/api/news/${topic}`,
    fetcher
  );

  return (
    <div className="mx-auto max-w-6xl p-4">
      {isLoading ? (
        <div className="flex h-60 items-center justify-center gap-2">
          <LoaderCircle className="size-8 animate-spin text-orange-700" />{" "}
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {articles.map((article: Article) => (
            <NewsItem
              key={article.url}
              article={article}
            />
          ))}
        </div>
      )}
    </div>
  );
};
