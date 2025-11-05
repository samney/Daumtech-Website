import HeaderSingleBlog from "../Layouts/Sections/HeaderSingleBlog";
import PostPage from "../components/Career/PostPage";
import Footer from "../components/Footer";

export default function SingleBlog() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <HeaderSingleBlog />
      <PostPage />
      <Footer />
    </div>
  );
}
