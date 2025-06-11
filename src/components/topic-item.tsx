import { Button } from "./ui/button";

type TopicItemProps = {
  topic: string;
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
};

export const TopicItem = ({
  topic,
  selectedTopic,
  onSelectTopic,
}: TopicItemProps) => {
  return (
    <Button
      className={`rounded-full px-4 py-2 text-sm transition duration-300 hover:bg-orange-700 hover:text-white dark:hover:bg-orange-700 ${selectedTopic === topic ? "bg-orange-700 text-white" : "bg-muted text-muted-foreground"}`}
      onClick={() => onSelectTopic(topic)}
    >
      {topic}
    </Button>
  );
};
