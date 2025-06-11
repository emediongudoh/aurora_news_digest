import { topics } from "@/configs";
import { TopicItem } from "./topic-item";

export const TopicsBar = () => {
  return (
    <div className="flex items-center justify-center gap-8 border bg-white p-4 dark:bg-[#171717]">
      {topics.map(topic => (
        <TopicItem
          key={topic.id}
          label={topic.label}
          href={topic.href}
        />
      ))}
    </div>
  );
};
