import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p>this is my toy category: {categories.length} </p>
    </div>
  );
};

export default Categories;
