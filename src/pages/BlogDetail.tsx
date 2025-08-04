import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as BlogPost;
          setPost(data);
        } else {
          console.error("Blog post not found");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-muted">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center py-20 text-muted">Post not found</div>;
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
      </Helmet>

      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-6">
          <Badge className="bg-primary-light text-primary font-medium">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
          <p className="text-muted-foreground text-lg mb-4">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        <img
          src={post.featuredImage}
          alt={post.title}
          className="rounded-lg mb-10 w-full object-cover"
        />

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: decodeHtml(post.content),
          }}
        />

        {post.tags?.length > 0 && (
          <div className="mt-10">
            <h4 className="font-semibold mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <button
            onClick={() => handleShare(post)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Share this post
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Helper function to decode HTML entities
function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Share handler
function handleShare(post: BlogPost) {
  const shareData = {
    title: post.title,
    text: post.excerpt,
    url: window.location.href,
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => console.log("Post shared successfully"))
      .catch((err) => console.error("Error sharing", err));
  } else {
    navigator.clipboard.writeText(shareData.url);
    alert("Link copied to clipboard!");
  }
}

export default BlogDetail;
