import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import posts from "../data";
import Hero from "../components/Hero";
import FeatureItem from "../components/FeatureItem";
import styled from "styled-components";
import styles from "./home.module.scss";
const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  // async function fetchProductData() {
  //   setLoading(true);

  //   try {
  //     const res = await fetch(API_URL);
  //     const data = await res.json();

  //     setPosts(data);
  //   } catch (error) {
  //     console.log("Error aagya ji");
  //     setPosts([]);
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchProductData();
  // }, []);
  // Extract unique categories from the data
  // const uniqueCategories = [
  //   ...new Set(items.map((product) => product.category)),
  // ];

  // // Shuffle the data to display random products in the carousel
  // const shuffledData = [...items].sort(() => 0.5 - Math.random());

  // // Select the first three shuffled products for the carousel
  // const carouselItems = shuffledData.slice(0, 3);
  // useEffect(() => {
  //   // Simulate an API call with a loading delay
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000); // Adjust the delay as needed
  // }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          <div className={`${styles.hero} mt-5 m-auto w-[95%] overflow-hidden`}>
            <Hero />
          </div>
          <div className="w-[95%] mt-4 m-auto overflow-hidden">
            <FeatureItem />
          </div>
          <Wrapper>
            <div className="container grid grid-filter-column ">
              <div className="flex flex-col gap-2 items-center pt-12 ">
                <div
                  className={`${styles.sel_button} w-[95%] pl-1 ${
                    selectedCategory === null ? styles.selA_button : ""
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </div>
                <div
                  className={`${styles.sel_button} w-[95%] pl-1 ${
                    selectedCategory === "Ayurvedic" ? styles.selA_button : ""
                  }`}
                  onClick={() => setSelectedCategory("Ayurvedic")}
                >
                  Ayurvedic
                </div>
                <div
                  className={`${styles.sel_button}  w-[95%] pl-1 ${
                    selectedCategory === "Supplement" ? styles.selA_button : ""
                  }`}
                  onClick={() => setSelectedCategory("Supplement")}
                >
                  Supplement
                </div>
                <div
                  className={` ${styles.sel_button} w-[95%] pl-1 ${
                    selectedCategory === "others" ? styles.selA_button : ""
                  }`}
                  onClick={() => setSelectedCategory("others")}
                >
                  Others
                </div>
              </div>

              <div className="product-view">
                <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                  {filteredProducts.map((post) => (
                    <Product key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    margin: auto;
  }
  @media (max-width: 640px) {
    .grid-filter-column {
      grid-template-columns: 0.4fr 1fr;
      margin: 10px;
    }
  }
  @media (max-width: 480px) {
    .grid-filter-column {
      grid-template-columns: 0.4fr 1fr;
      margin: 5px;
    }
  }
  @media (max-width: 380px) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Home;
