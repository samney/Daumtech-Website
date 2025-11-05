import HeaderSingleBlog from "../BlogSectionHeader";
import BlogDetail from "../Blog/BlogPost/BlogDetail";
import Footer from "../Footer";

export default function SingleBlog() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <BlogDetail />
      <Footer />
    </div>
  );
}
