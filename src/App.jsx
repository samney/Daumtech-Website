import React from "react";
import Layout from "./components/Layout";
import FixedBottomButton from "./components/buttons/FixedButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import PageTransition from "./components/PageTransition";

// Import pages
import {
  Home,
  About,
  // Services,
  // Contact,
  Blog,
  Career,
  Npkindex,
  Carbonedge,
  PostPage,
  SingleBlog,
  NotFoundPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:id" element={<PostPage />} />
          <Route path="/npkindex" element={<Npkindex />} />
          <Route path="/carbonedge" element={<Carbonedge />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <FixedBottomButton />
    </Router>
  );
};

export default App;
