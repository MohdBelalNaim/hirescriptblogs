import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, BookOpen } from "lucide-react";

// Import blog post images
import careerTipsImg from "@/assets/career-tips.jpg";
import techTrendsImg from "@/assets/tech-trends.jpg";
import startupNewsImg from "@/assets/startup-news.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

// Sample blog posts data
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
];

const recentPosts = [
  {
    id: "4",
    title: "Remote Work Tips for New Graduates",
    excerpt:
      "Navigate the challenges of remote work and build meaningful connections with your team from day one.",
    category: "Career Tips",
    author: "Emma Watson",
    publishDate: "Dec 8, 2024",
    readTime: "4 min read",
    featuredImage: careerTipsImg,
  },
  {
    id: "5",
    title:
      "Networking in the Digital Age: Building Professional Relationships Online",
    excerpt:
      "Master the art of digital networking and create lasting professional relationships in our connected world.",
    category: "Career Tips",
    author: "Michael Chang",
    publishDate: "Dec 5, 2024",
    readTime: "5 min read",
    featuredImage: careerTipsImg,
  },
  {
    id: "6",
    title: "The Future of Work: Trends Shaping 2025 and Beyond",
    excerpt:
      "Discover the emerging trends that will define the workplace of tomorrow and how to prepare for them.",
    category: "Tech Trends",
    author: "Lisa Park",
    publishDate: "Dec 3, 2024",
    readTime: "8 min read",
    featuredImage: techTrendsImg,
  },
];

const Index = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const articles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">200+</h3>
              <p className="text-muted-foreground">Career Articles</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">50K+</h3>
              <p className="text-muted-foreground">Students Helped</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="bg-primary-light text-primary mb-4"
            >
              Featured Content
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Career Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with our curated collection of career advice, industry
              trends, and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((data) => (
              <BlogCard key={data.id} post={data} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
