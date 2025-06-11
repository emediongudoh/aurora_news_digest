"use client";

import Link from "next/link";

// Third-party imports
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Local imports
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

const searchFormSchema = z.object({
  query: z.string().min(1, { message: "Please enter a search term." }),
});

export const Header = () => {
  const form = useForm({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { query: "" },
  });

  const onSubmit = (values: { query: string }) => {
    console.log("Searching:", values.query);
    // handle actual search logic
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-t-2 border-b border-t-orange-700 bg-white p-4 dark:bg-[#121212]">
      <Logo />

      <div className="flex items-center gap-4">
        <Link
          href="/newsletter"
          className="text-sm"
        >
          Newsletter
        </Link>

        <ModeToggle />

        {/* Search form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <Search className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
                  <FormControl>
                    <Input
                      placeholder="Search Aurora News"
                      {...field}
                      className="bg-muted pl-8"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>

        <Link href="/signup">
          <Button
            variant="site"
            size="sm"
          >
            Signup
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm">Login</Button>
        </Link>
      </div>
    </header>
  );
};
