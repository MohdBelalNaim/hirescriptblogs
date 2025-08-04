import { Header } from "@/components/Header";
// Import blog post images
import careerTipsImg from "@/assets/career-tips.jpg";
import techTrendsImg from "@/assets/tech-trends.jpg";
import startupNewsImg from "@/assets/startup-news.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const articles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const featuredPosts = [
    {
      id: "1",
      title: "5 Essential Skills Every College Graduate Needs in 2024",
      excerpt:
        "From AI literacy to emotional intelligence, discover the key skills that will set you apart in today's competitive job market.",
      category: "Career Tips",
      author: "Sarah Chen",
      publishDate: "Dec 15, 2024",
      readTime: "5 min read",
      featuredImage: careerTipsImg,
    },
    {
      id: "2",
      title: "The Rise of AI Startups: What Young Professionals Should Know",
      excerpt:
        "Explore how artificial intelligence is reshaping the startup landscape and creating new opportunities for tech-savvy professionals.",
      category: "Tech Trends",
      author: "Alex Rodriguez",
      publishDate: "Dec 12, 2024",
      readTime: "7 min read",
      featuredImage: techTrendsImg,
    },
    {
      id: "3",
      title: "From Dorm Room to Boardroom: Student Entrepreneurs Making Waves",
      excerpt:
        "Meet the college students who are building successful companies while still in school and learn from their journey.",
      category: "Startup News",
      author: "Jordan Kim",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read",
      featuredImage: startupNewsImg,
    },
    {
      id: "4",
      title: "5 Essential Skills Every College Graduate Needs in 2024",
      excerpt:
        "From AI literacy to emotional intelligence, discover the key skills that will set you apart in today's competitive job market.",
      category: "Career Tips",
      author: "Sarah Chen",
      publishDate: "Dec 15, 2024",
      readTime: "5 min read",
      featuredImage: careerTipsImg,
    },
    {
      id: "5",
      title: "The Rise of AI Startups: What Young Professionals Should Know",
      excerpt:
        "Explore how artificial intelligence is reshaping the startup landscape and creating new opportunities for tech-savvy professionals.",
      category: "Tech Trends",
      author: "Alex Rodriguez",
      publishDate: "Dec 12, 2024",
      readTime: "7 min read",
      featuredImage: techTrendsImg,
    },
    {
      id: "6",
      title: "From Dorm Room to Boardroom: Student Entrepreneurs Making Waves",
      excerpt:
        "Meet the college students who are building successful companies while still in school and learn from their journey.",
      category: "Startup News",
      author: "Jordan Kim",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read",
      featuredImage: startupNewsImg,
    },
    {
      id: "7",
      title: "5 Essential Skills Every College Graduate Needs in 2024",
      excerpt:
        "From AI literacy to emotional intelligence, discover the key skills that will set you apart in today's competitive job market.",
      category: "Career Tips",
      author: "Sarah Chen",
      publishDate: "Dec 15, 2024",
      readTime: "5 min read",
      featuredImage: careerTipsImg,
    },
    {
      id: "8",
      title: "The Rise of AI Startups: What Young Professionals Should Know",
      excerpt:
        "Explore how artificial intelligence is reshaping the startup landscape and creating new opportunities for tech-savvy professionals.",
      category: "Tech Trends",
      author: "Alex Rodriguez",
      publishDate: "Dec 12, 2024",
      readTime: "7 min read",
      featuredImage: techTrendsImg,
    },
    {
      id: "9",
      title: "From Dorm Room to Boardroom: Student Entrepreneurs Making Waves",
      excerpt:
        "Meet the college students who are building successful companies while still in school and learn from their journey.",
      category: "Startup News",
      author: "Jordan Kim",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read",
      featuredImage: startupNewsImg,
    },
    {
      id: "10",
      title: "5 Essential Skills Every College Graduate Needs in 2024",
      excerpt:
        "From AI literacy to emotional intelligence, discover the key skills that will set you apart in today's competitive job market.",
      category: "Career Tips",
      author: "Sarah Chen",
      publishDate: "Dec 15, 2024",
      readTime: "5 min read",
      featuredImage: careerTipsImg,
    },
    {
      id: "11",
      title: "The Rise of AI Startups: What Young Professionals Should Know",
      excerpt:
        "Explore how artificial intelligence is reshaping the startup landscape and creating new opportunities for tech-savvy professionals.",
      category: "Tech Trends",
      author: "Alex Rodriguez",
      publishDate: "Dec 12, 2024",
      readTime: "7 min read",
      featuredImage: techTrendsImg,
    },
    {
      id: "12",
      title: "From Dorm Room to Boardroom: Student Entrepreneurs Making Waves",
      excerpt:
        "Meet the college students who are building successful companies while still in school and learn from their journey.",
      category: "Startup News",
      author: "Jordan Kim",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read",
      featuredImage: startupNewsImg,
    },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <div className="font-bold text-4xl py-12">All articles</div>
      </div>
      <div className="container grid grid-cols-3 gap-8">
        {articles.map((data) => (
          <BlogCard key={data.id} post={data} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllArticles;
