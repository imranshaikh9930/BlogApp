import { useEffect, useState } from "react";
import { BlogCard } from "./components/Card";
import { BlogDetails } from "./pages/BlogDetails";
import { useQuery } from "@tanstack/react-query";
import { BlogCardSkeleton } from "./components/skeletons/BlogCardSkeleton";
import { BlogDetailsSkeleton } from "./components/skeletons/BlogDetailsSkeleton";

interface Blog {
  id: number;
  title: string;
  description: string;
  category: string[];
  date: string;
  coverImage: string;
  content: string;
  tags?: string[];
}

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const { isLoading, error, data } = useQuery<Blog[]>({
    queryKey: ["BlogData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    },
  });

  useEffect(() => {
    if (data && data.length > 0 && !selectedBlog) {
      setSelectedBlog(data[0]);
    }
  }, [data, selectedBlog]);

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-3">

   
    <div className="
     
    border 
    border-gray-200 
    rounded-lg 
    bg-white
    ">
      <div className="mx-auto text-2xl text-center w-full py-3">

    <h1>CA MONK BLOGS</h1>
      </div>
      <div className=" flex 
    gap-6 
    px-4 
    py-4 
    max-w-6xl 
    mx-auto
    bg-slate-100
    shadow-lg">

      {/* Left */}
      <div className="w-[420px] space-y-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))
          : data?.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                date={blog.date}
                coverImage={blog.coverImage}
                isActive={selectedBlog?.id === blog.id}
                onClick={() => setSelectedBlog(blog)}

              />
            ))}
      </div>

      {/* Right */}
      <div className="flex-1">
        {isLoading ? (
          <BlogDetailsSkeleton />
        ) : selectedBlog ? (
          <BlogDetails
            title={selectedBlog.title}
            coverImage={selectedBlog.coverImage}
            category={selectedBlog.category}
            date={selectedBlog.date}
            description={selectedBlog.description}
            content={selectedBlog.content}
            tags={selectedBlog.tags ?? []}
          />
        ) : (
          <p className="text-muted-foreground">
            Select a blog to read details
          </p>
        )}
      </div>
      </div>
  
    </div>
    </div>
  );
}

export default App;
