import React, { Suspense, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const Categories = React.lazy(
    () => import("./components/Categories/Categories"),
  );
  const Products = React.lazy(() => import("./components/Products/Products"));

  const [Video, setVideo] = useState(null);
  const [Testimonials, setTestimonials] = useState(null);
  const [Footer, setFooter] = useState(null);

  useEffect(() => {
    import("./components/Video/Video").then((mod) =>
      setVideo(() => mod.default),
    );

    import("./components/Testimonials/Testimonials").then((mod) =>
      setTestimonials(() => mod.default),
    );

    import("./components/Footer/Footer").then((mod) =>
      setFooter(() => mod.default),
    );
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <Suspense fallback={<p>Loading content...</p>}>
        <Categories />
        <Products />
      </Suspense>

      {!Video && <p>Loading Video...</p>}
      {Video && <Video />}

      {!Testimonials && <p>Loading Testimonials...</p>}
      {Testimonials && <Testimonials />}

      {!Footer && <p>Loading Footer...</p>}
      {Footer && <Footer />}
    </>
  );
}

export default App;
