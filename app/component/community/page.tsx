"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
interface Post {
  id: number;
  author: string;
  username: string;
  content: string;
}

export default function Community() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate backend fetch with delay
  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          author: "Emily Fisher",
          username: "@emilyfisher",
          content:
            "Telemedicine is transforming healthcare access, especially in remote areas. What are the biggest challenges you've faced when setting up a telehealth service?",
        },
        {
          id: 2,
          author: "John Doe",
          username: "@johndoe",
          content:
            "Telemedicine is transforming healthcare access, especially in remote areas. What are the biggest challenges you've faced when setting up a telehealth service?",
        },
        {
          id: 3,
          author: "Sarah Smith",
          username: "@sarahsmith",
          content:
            "Telemedicine is transforming healthcare access, especially in remote areas. What are the biggest challenges you've faced when setting up a telehealth service?",
        },
      ]);
      setLoading(false);
    }, 2000); // Simulate network delay
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      {/* Navbar */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <Mail
            className="text-gray-600 hidden sm:block border border-1 border-gray-300 rounded-full p-1"
            size={24}
          />
          <Bell
            className="text-gray-600 hidden sm:block border border-1 border-gray-300  rounded-full p-1"
            size={24}
          />
          <Separator orientation="vertical" className="text-black w-2" />
          <div className="flex items-center gap-2">
            
            <Image
              src="/profile.jpg"
              alt="User"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold hidden sm:block">Jason Ronald</span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4 p-4 rounded-lg shadow-sm hidden md:block">
          <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 h-16 text-center">Community Hub: Connect, Share, and Collaborate</h3>
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-24 p-2">Communities</h3>
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-48 p-2">Recent</h3>
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-48 p-2">Recommendations</h3>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {loading ? (
            // Skeleton Loader (while fetching data)
            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm animate-pulse"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col space-y-2">
                      <div className="w-24 h-4 bg-gray-300 rounded"></div>
                      <div className="w-16 h-3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-gray-300 h-24 rounded-lg"></div>
                    <div className="bg-gray-300 h-24 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Render actual posts after data is loaded
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src="/user.png"
                      alt="User"
                      width={200}
                      height={200}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <span className="text-sm text-gray-500">
                        {post.username}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{post.content}</p>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-gray-200 h-24 rounded-lg"></div>
                    <div className="bg-gray-200 h-24 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="w-full md:w-1/4  p-4 rounded-lg shadow-sm hidden md:block">
          <div className="text-center mb-4 bg-white h-40 rounded-md">
            <Image
              src="/profile.jpg"
              alt="User"
              width={200}
              height={200}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h4 className="font-semibold mt-2">Jason Ronald</h4>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              Create new post
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-20 p-2">
              Topics you might like
            </h3>
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-24 p-2">Featured</h3>
            <h3 className="text-lg text-gray-400 mb-3 bg-white h-48 p-2">Recent posts</h3>
          </div>
        </aside>
      </div>
    </div>
  );
}
