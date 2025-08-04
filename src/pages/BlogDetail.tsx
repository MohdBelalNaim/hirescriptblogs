import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Share2, Calendar, Clock, User, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import blog post images
import careerTipsImg from "@/assets/career-tips.jpg";
import techTrendsImg from "@/assets/tech-trends.jpg";
import startupNewsImg from "@/assets/startup-news.jpg";

// Sample blog posts data with full content
const blogPosts = {
  "1": {
    id: "1",
    title: "5 Essential Skills Every College Graduate Needs in 2024",
    excerpt: "From AI literacy to emotional intelligence, discover the key skills that will set you apart in today's competitive job market.",
    category: "Career Tips",
    author: "Sarah Chen",
    publishDate: "Dec 15, 2024",
    readTime: "5 min read",
    featuredImage: careerTipsImg,
    content: `
      <p>The job market in 2024 is more competitive than ever, and college graduates need to arm themselves with skills that go beyond their academic achievements. Here are the five essential skills that will set you apart from the competition.</p>

      <h2>1. AI Literacy and Digital Fluency</h2>
      <p>In an era where artificial intelligence is reshaping industries, understanding how to work with AI tools isn't just an advantage—it's becoming a necessity. This doesn't mean you need to become a programmer, but you should:</p>
      <ul>
        <li>Understand how AI can enhance your productivity</li>
        <li>Learn to use AI tools relevant to your field</li>
        <li>Develop critical thinking about AI outputs and limitations</li>
        <li>Stay informed about AI trends in your industry</li>
      </ul>

      <h2>2. Emotional Intelligence and Interpersonal Skills</h2>
      <p>While technical skills can be taught quickly, emotional intelligence remains uniquely human. In remote and hybrid work environments, the ability to:</p>
      <ul>
        <li>Communicate effectively across digital platforms</li>
        <li>Build rapport with team members you may never meet in person</li>
        <li>Navigate conflicts and difficult conversations</li>
        <li>Show empathy and understanding in diverse teams</li>
      </ul>

      <h2>3. Adaptability and Continuous Learning</h2>
      <p>The pace of change in today's workplace means that the skills you learn in college are just the foundation. Employers value candidates who can:</p>
      <ul>
        <li>Quickly learn new tools and technologies</li>
        <li>Adapt to changing priorities and market conditions</li>
        <li>Take initiative in their professional development</li>
        <li>Embrace feedback and use it for growth</li>
      </ul>

      <h2>4. Data Analysis and Critical Thinking</h2>
      <p>Regardless of your field, the ability to analyze data and draw meaningful insights is invaluable. This includes:</p>
      <ul>
        <li>Basic statistical literacy</li>
        <li>Understanding how to interpret charts and graphs</li>
        <li>Making data-driven decisions</li>
        <li>Identifying trends and patterns</li>
      </ul>

      <h2>5. Cross-Cultural Communication</h2>
      <p>With globalization and remote work, you'll likely work with people from diverse backgrounds. Developing:</p>
      <ul>
        <li>Cultural awareness and sensitivity</li>
        <li>Clear, inclusive communication styles</li>
        <li>Time zone and scheduling flexibility</li>
        <li>Understanding of different work cultures</li>
      </ul>

      <h2>Putting It All Together</h2>
      <p>The most successful graduates don't just develop these skills—they actively demonstrate them. Consider creating a portfolio that showcases projects where you've used AI tools, led diverse teams, adapted to challenges, analyzed data, and worked across cultures.</p>

      <p>Remember, these skills complement your technical expertise and academic knowledge. They're what will help you not just land your first job, but thrive and advance throughout your career.</p>
    `,
    tags: ["Career Development", "Skills", "Job Market", "AI", "Soft Skills"]
  },
  "2": {
    id: "2",
    title: "The Rise of AI Startups: What Young Professionals Should Know",
    excerpt: "Explore how artificial intelligence is reshaping the startup landscape and creating new opportunities for tech-savvy professionals.",
    category: "Tech Trends",
    author: "Alex Rodriguez",
    publishDate: "Dec 12, 2024",
    readTime: "7 min read",
    featuredImage: techTrendsImg,
    content: `
      <p>The AI revolution isn't coming—it's here. And it's creating unprecedented opportunities for young professionals who understand how to navigate this new landscape. Let's explore what you need to know about the AI startup ecosystem.</p>

      <h2>The Current AI Startup Landscape</h2>
      <p>We're experiencing the fastest growth in AI startup funding in history. In 2024 alone, AI startups have raised over $50 billion globally, with applications spanning every industry from healthcare to finance to creative arts.</p>

      <h2>Key Areas of Opportunity</h2>
      
      <h3>1. AI-Powered SaaS Solutions</h3>
      <p>Software-as-a-Service platforms enhanced with AI capabilities are seeing massive adoption. Whether it's customer service chatbots, automated content creation, or predictive analytics, the opportunities are endless.</p>

      <h3>2. Industry-Specific AI Applications</h3>
      <p>While general AI tools get the headlines, specialized solutions for specific industries often provide better ROI and clearer paths to market. Consider:</p>
      <ul>
        <li>Healthcare diagnostics and treatment planning</li>
        <li>Financial risk assessment and fraud detection</li>
        <li>Supply chain optimization</li>
        <li>Legal document analysis</li>
      </ul>

      <h3>3. AI Infrastructure and Tools</h3>
      <p>The picks and shovels of the AI gold rush—tools that help other companies build and deploy AI solutions—represent a huge opportunity.</p>

      <h2>Skills That Matter in AI Startups</h2>
      
      <h3>Technical Skills</h3>
      <ul>
        <li>Machine learning fundamentals</li>
        <li>Data engineering and pipeline management</li>
        <li>Cloud computing (AWS, GCP, Azure)</li>
        <li>Programming languages: Python, R, JavaScript</li>
      </ul>

      <h3>Non-Technical Skills</h3>
      <ul>
        <li>Product management with AI considerations</li>
        <li>AI ethics and responsible deployment</li>
        <li>Business model design for AI products</li>
        <li>Regulatory compliance understanding</li>
      </ul>

      <h2>How to Position Yourself</h2>
      
      <h3>1. Build Real Projects</h3>
      <p>Don't just study AI—build something with it. Create a portfolio of projects that demonstrate your ability to solve real problems using AI tools.</p>

      <h3>2. Understand the Business Side</h3>
      <p>Technical skills alone aren't enough. Learn about AI business models, market dynamics, and the challenges of scaling AI products.</p>

      <h3>3. Stay Informed</h3>
      <p>The AI field moves fast. Follow key publications, attend conferences, and join communities where practitioners share insights.</p>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Chasing every new AI trend without depth</li>
        <li>Ignoring the ethical implications of AI development</li>
        <li>Underestimating the importance of data quality</li>
        <li>Focusing only on technology without considering user experience</li>
      </ul>

      <h2>The Road Ahead</h2>
      <p>The AI startup boom is just beginning. As the technology matures and becomes more accessible, we'll see even more innovative applications emerge. The key for young professionals is to build a solid foundation now and remain adaptable as the landscape evolves.</p>

      <p>Whether you want to join an AI startup, launch your own, or bring AI capabilities to traditional companies, the opportunities are vast for those who prepare thoughtfully and act strategically.</p>
    `,
    tags: ["AI", "Startups", "Technology", "Career Opportunities", "Innovation"]
  },
  "3": {
    id: "3",
    title: "From Dorm Room to Boardroom: Student Entrepreneurs Making Waves",
    excerpt: "Meet the college students who are building successful companies while still in school and learn from their journey.",
    category: "Startup News",
    author: "Jordan Kim",
    publishDate: "Dec 10, 2024",
    readTime: "6 min read",
    featuredImage: startupNewsImg,
    content: `
      <p>Some of today's most successful companies started in college dorm rooms. While not every student entrepreneur needs to drop out to succeed, there's a growing movement of students who are building meaningful businesses while completing their education.</p>

      <h2>The New Generation of Student Entrepreneurs</h2>
      <p>Today's student entrepreneurs are different from previous generations. They're more globally minded, socially conscious, and technologically savvy. They're building companies that solve real problems while maintaining their academic commitments.</p>

      <h2>Success Stories</h2>

      <h3>Case Study 1: EcoTrack</h3>
      <p>Founded by MIT students Sarah Johnson and Mike Chen, EcoTrack helps companies monitor and reduce their carbon footprint through AI-powered analytics. Starting as a class project, they now serve over 200 companies and have raised $2M in seed funding.</p>

      <p><strong>Key Lessons:</strong></p>
      <ul>
        <li>Started with a real problem they experienced</li>
        <li>Leveraged university resources and mentorship</li>
        <li>Built MVP while still in school</li>
        <li>Used academic research to differentiate their solution</li>
      </ul>

      <h3>Case Study 2: StudyBuddy</h3>
      <p>Stanford student Maria Rodriguez created StudyBuddy, a peer-to-peer tutoring platform, after struggling to find affordable help in her calculus class. The platform now connects over 50,000 students globally.</p>

      <p><strong>Key Lessons:</strong></p>
      <ul>
        <li>Identified pain point in their immediate environment</li>
        <li>Started small with their own university</li>
        <li>Focused on community building over technology</li>
        <li>Graduated before scaling significantly</li>
      </ul>

      <h2>Strategies for Student Entrepreneurs</h2>

      <h3>1. Leverage Your University Ecosystem</h3>
      <ul>
        <li>Use incubators and accelerator programs</li>
        <li>Access to professors as advisors</li>
        <li>Free or low-cost resources (legal, accounting, marketing)</li>
        <li>Network with alumni entrepreneurs</li>
      </ul>

      <h3>2. Start Small and Validate Early</h3>
      <ul>
        <li>Begin with problems you understand personally</li>
        <li>Test ideas with fellow students</li>
        <li>Build MVPs with minimal resources</li>
        <li>Iterate based on user feedback</li>
      </ul>

      <h3>3. Balance Academics and Entrepreneurship</h3>
      <ul>
        <li>Set clear priorities and boundaries</li>
        <li>Use academic projects to advance your startup</li>
        <li>Build a strong support team</li>
        <li>Consider timing of major milestones</li>
      </ul>

      <h2>Common Challenges and Solutions</h2>

      <h3>Time Management</h3>
      <p>The biggest challenge is balancing coursework with building a company. Successful student entrepreneurs often:</p>
      <ul>
        <li>Choose classes that complement their business goals</li>
        <li>Work on their startup during school breaks</li>
        <li>Build efficient systems and delegate early</li>
      </ul>

      <h3>Funding</h3>
      <p>Student entrepreneurs often have limited access to traditional funding. Creative solutions include:</p>
      <ul>
        <li>University startup competitions</li>
        <li>Crowdfunding campaigns</li>
        <li>Revenue-based financing</li>
        <li>Angel investors who specifically support student entrepreneurs</li>
      </ul>

      <h3>Credibility</h3>
      <p>Being taken seriously as a young entrepreneur can be challenging. Strategies include:</p>
      <ul>
        <li>Building a strong advisory board</li>
        <li>Focusing on product quality and results</li>
        <li>Leveraging university brand and professors' reputations</li>
        <li>Being transparent about your student status while emphasizing your dedication</li>
      </ul>

      <h2>The Future of Student Entrepreneurship</h2>
      <p>Universities are increasingly supportive of student entrepreneurs, offering more resources, flexible academic programs, and even allowing students to take gap years to focus on their startups.</p>

      <p>The rise of remote work, no-code tools, and accessible funding options means it's easier than ever for students to start meaningful companies without significant upfront investment.</p>

      <h2>Getting Started</h2>
      <p>If you're a student interested in entrepreneurship:</p>
      <ol>
        <li>Start by identifying problems you face daily</li>
        <li>Research your university's entrepreneurship resources</li>
        <li>Connect with other student entrepreneurs</li>
        <li>Begin with small experiments and prototypes</li>
        <li>Consider taking entrepreneurship courses</li>
      </ol>

      <p>Remember, you don't need to have the next Facebook to be a successful student entrepreneur. Focus on learning, building, and solving real problems. The experience and network you build will be invaluable regardless of whether your first venture becomes a billion-dollar company.</p>
    `,
    tags: ["Student Entrepreneurs", "Startup Stories", "University", "Young Professionals", "Success Stories"]
  }
};

// Related posts for suggestions
const relatedPosts = [
  {
    id: "4",
    title: "Remote Work Tips for New Graduates",
    excerpt: "Navigate the challenges of remote work and build meaningful connections with your team from day one.",
    category: "Career Tips",
    author: "Emma Watson",
    publishDate: "Dec 8, 2024",
    readTime: "4 min read",
    featuredImage: careerTipsImg
  },
  {
    id: "5",
    title: "Networking in the Digital Age: Building Professional Relationships Online",
    excerpt: "Master the art of digital networking and create lasting professional relationships in our connected world.",
    category: "Career Tips",
    author: "Michael Chang",
    publishDate: "Dec 5, 2024",
    readTime: "5 min read",
    featuredImage: careerTipsImg
  },
  {
    id: "6",
    title: "The Future of Work: Trends Shaping 2025 and Beyond",
    excerpt: "Discover the emerging trends that will define the workplace of tomorrow and how to prepare for them.",
    category: "Tech Trends",
    author: "Lisa Park",
    publishDate: "Dec 3, 2024",
    readTime: "8 min read",
    featuredImage: techTrendsImg
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = "";
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The blog post link has been copied to your clipboard.",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-8">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Featured Image */}
          <div className="aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="bg-primary-light text-primary mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            {/* Author and Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary-light text-primary font-semibold">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleShare("twitter")}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleShare("facebook")}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleShare("linkedin")}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleShare("copy")}
                  className="text-muted-foreground hover:text-primary"
                >
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Separator />
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            style={{
              "--tw-prose-body": "hsl(var(--foreground))",
              "--tw-prose-headings": "hsl(var(--foreground))",
              "--tw-prose-links": "hsl(var(--primary))",
              "--tw-prose-bold": "hsl(var(--foreground))",
              "--tw-prose-counters": "hsl(var(--muted-foreground))",
              "--tw-prose-bullets": "hsl(var(--muted-foreground))",
              "--tw-prose-quotes": "hsl(var(--foreground))",
              "--tw-prose-quote-borders": "hsl(var(--border))",
              "--tw-prose-captions": "hsl(var(--muted-foreground))",
              "--tw-prose-code": "hsl(var(--foreground))",
              "--tw-prose-pre-code": "hsl(var(--muted-foreground))",
              "--tw-prose-pre-bg": "hsl(var(--muted))",
              "--tw-prose-th-borders": "hsl(var(--border))",
              "--tw-prose-td-borders": "hsl(var(--border))",
            } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="mb-12" />

          {/* Author Bio */}
          <div className="bg-surface rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary-light text-primary font-semibold text-lg">
                  {post.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.author} is a career development specialist and writer focusing on helping young professionals navigate the modern workplace. With over 5 years of experience in career coaching, {post.author.split(" ")[0]} has helped hundreds of students and recent graduates launch successful careers.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button variant="ghost" size="sm">View Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;