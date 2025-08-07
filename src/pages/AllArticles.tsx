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

  return (
    <>
      <Header />
      <div className="container">
        <div className="font-bold text-4xl py-12">All articles</div>
      </div>
      <div className="container grid grid-cols-3 gap-8 max-sm:grid-cols-1 mb-6">
        {articles.map((data) => (
          <BlogCard key={data.id} post={data} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllArticles;
