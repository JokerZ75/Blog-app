import Blog from "./Blog";
import { useEffect, useState } from "react";

const followedBlogs = () => {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:8008/blogs/", { signal })
      .then((res) => res.json())
      .then((blogData) => {
        blogData.forEach((blog:any) => {
        fetch(`http://localhost:8008/users/byid/${blog.user}`)
            .then((res) => res.json())
            .then((user) => {
                setBlogs((blogs:any) =>[
                    ...blogs,
                    {...blog, Author: user.username}
                ]);
            });
      })
    })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw err;
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="dark:bg-slate-800 bg-slate-300 rounded-b m-5 mt-0 p-5">
      <h2 className="text-3xl font-bold">Blogs</h2>
      <div>
        {blogs.map((blog: any) => {
          return (
            <div key={blog.title} className="mb-2 mt-1 py-2 dark:bg-slate-600 bg-slate-200">
            <Blog Title={blog.title} description={blog.description} Author={blog.Author} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default followedBlogs;
