import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg", // Replace with actual image URL
      title: "Where Do You Learn HTML & CSS in 2019?",
      author: "Ham Brook",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      link: "/",
    },
    {
      id: 2,
      image:
        "https://static.vecteezy.com/system/resources/previews/000/689/056/original/web-development-landing-page-template-with-header-vector.jpg", // Replace with actual image URL
      title: "Where Do You Learn HTML & CSS in 2019?",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      link: "/",
    },
    {
      id: 3,
      image: "https://wallpapercave.com/wp/wp6350578.jpg", // Replace with actual image URL
      title: "Where Do You Learn HTML & CSS in 2019?",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      link: "/",
    },
  ];

  return (
    <section id="blog" className="py-2 bg-primary text-secondary">
      <div className="mt-8 pt-12 py-2 m-3 border rounded-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Welcome to my Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-primary shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm mb-4">
                    {blog.author} · {blog.date} ·{" "}
                    <span className="hover:underline font-semibold">
                      {blog.category}
                    </span>
                  </p>
                  <p className="mb-4">{blog.description}</p>
                  <a href={blog.link} className="hover:underline font-semibold">
                    Continue Reading...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
