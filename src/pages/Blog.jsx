import HeaderBlog from "../Layouts/Sections/HeaderBlog";
import HomeBlog from "../Layouts/Sections/HomeBlog";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <HeaderBlog />
      <HomeBlog />
      <Footer />
    </div>
  );
}
