import { Button } from "@/components/ui/button";

export const HeroCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-white py-20 text-center dark:bg-[#121212]">
      <h1 className="text-6xl font-medium">
        Curated News, <br />{" "}
        <span className="border-b-8 border-lime-700">Smarter You</span>
      </h1>

      <p className="text-2xl font-medium">Your daily dose of news</p>

      <Button
        variant="site"
        size="lg"
      >
        Get started
      </Button>
    </div>
  );
};
