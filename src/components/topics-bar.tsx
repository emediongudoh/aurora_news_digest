import { topics } from "@/configs";
import { TopicItem } from "./topic-item";

type TopicsBarProps = {
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
};

export const TopicsBar = ({ selectedTopic, onSelectTopic }: TopicsBarProps) => {
  return (
    <div className="flex items-center justify-center gap-8 border bg-white p-4 dark:bg-[#171717]">
      {topics.map((topic, index) => (
        <TopicItem
          key={index}
          topic={topic}
          selectedTopic={selectedTopic}
          onSelectTopic={onSelectTopic}
        />
      ))}
    </div>
  );
};
