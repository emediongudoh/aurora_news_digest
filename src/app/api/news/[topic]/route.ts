import { NextResponse } from "next/server";

export const revalidate = 600;

interface NewsProps {
  params: Promise<{ topic: string }>;
}

export async function GET(request: Request, { params }: NewsProps) {
  const { topic } = await params;
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key not found" }, { status: 500 });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?category=${topic.toLowerCase()}&language=en&pageSize=12&apiKey=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 600 } });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    return NextResponse.json(data.articles);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
