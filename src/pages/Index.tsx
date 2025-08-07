import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Link } from "react-router-dom";

const Index = () => {
  const [articles, setArticles] = useState<any[]>([]);

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
              <div className="w-12 h-12 bg-[#ecf4f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-[#013B52]" />
              </div>
              <h3 className="text-3xl font-bold text-[#013B52]">200+</h3>
              <p className="text-[#666870]">Career Articles</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#ecf4f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#013B52]" />
              </div>
              <h3 className="text-3xl font-bold text-[#013B52]">50K+</h3>
              <p className="text-[#666870]">Students Helped</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#ecf4f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-[#013B52]" />
              </div>
              <h3 className="text-3xl font-bold text-[#013B52]">95%</h3>
              <p className="text-[#666870]">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-[#ecf4f6]">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl text-[#013B52] font-bold mb-2">
                Recent Articles
              </h2>
              <p className="text-[#666870]">Discover more insights and tips</p>
            </div>
            <Link to="/all">
              <Button
                variant="outline"
                className="border-[whitesmoke] text-[#013B52] bg-white hover:bg-[#013B52] hover:text-white"
              >
                View All Articles
              </Button>
            </Link>
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
