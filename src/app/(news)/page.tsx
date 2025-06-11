"use client";

import { useState } from "react";

// Local imports
import { HeroCTA } from "@/components/hero-cta";
import { NewsList } from "@/components/news-list";
import { TopicsBar } from "@/components/topics-bar";

const DEFAULT_TOPIC = "Technology";

export default function Home() {
  const [topic, setTopic] = useState(DEFAULT_TOPIC);

  return (
    <div>
      <HeroCTA />
      <TopicsBar
        selectedTopic={topic}
        onSelectTopic={setTopic}
      />
      <NewsList topic={topic} />
    </div>
  );
}
