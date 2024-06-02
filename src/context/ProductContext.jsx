import { createContext, useState, useEffect } from "react";

//Create Context
export const ProductContext = createContext();

//Create Provider

const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
