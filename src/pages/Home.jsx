import React, { useContext, useEffect, useMemo, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";

const Home = () => {
  // import product context
  const { products } = useContext(ProductContext);

  // Memoize unique categories to prevent unnecessary recalculations
  const uniqueCategories = useMemo(
    () => [
      ...new Set(
        products.map((product) =>
          typeof product.category === "object"
            ? product.category.name
            : product.category
        )
      ),
    ],
    [products]
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // set the selected category to null to show all products by default
    setSelectedCategory(null);
  }, []);

  // filtered product

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // filter by category - by those buttons
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // filter by search term
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, "i");
      filtered = filtered.filter((product) => searchRegex.test(product.title));
    }

    return filtered;
  }, [products, selectedCategory, searchTerm]);

  // pagination

  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // shaky

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    // check <=
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
    setCurrentPage(1); // resets the page when changing to all products
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main>
      <div>
        <div className="category_btn_container">
          <div className="cat_btn">
            <button
              key="allProducts"
              onClick={handleAllProductsClick}
              className={selectedCategory === null ? "bg-red-500" : ""}
              style={{
                backgroundColor:
                  selectedCategory === null ? "red" : "transparent",
                color: selectedCategory === null ? "fff" : "",
                padding: "10px",
                fontFamily: "inherit",
                fontSize: "13px",
                border: "1px solid red",
                borderRadius: "4px",
                textTransform: "capitalize",
              }}
            >
              All Products
            </button>
            {uniqueCategories.map((categoryName) => (
              <button
                key={categoryName}
                onClick={handleAllProductsClick}
                className={selectedCategory === null ? "bg-red-500" : ""}
                style={{
                  backgroundColor:
                    selectedCategory === null ? "red" : "transparent",
                  color: selectedCategory === null ? "fff" : "",
                  padding: "10px",
                  fontFamily: "inherit",
                  fontSize: "13px",
                  border: "1px solid red",
                  borderRadius: "4px",
                  textTransform: "capitalize",
                }}
              >
                {categoryName}
              </button>
            ))}
          </div>
          {/* search input */}
          <div className="search_container">
            <input
              type="text"
              placeholder="Search Products ..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>

          <div className="product_lists">
            {currentProducts.length === 0 ? (
              <p>Product not available</p>
            ) : (
              currentProducts.map((product) => (
                <div key={product.id}>Product</div>
              ))
            )}
          </div>

          {/* pagination */}
          <div className="pagination">
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
