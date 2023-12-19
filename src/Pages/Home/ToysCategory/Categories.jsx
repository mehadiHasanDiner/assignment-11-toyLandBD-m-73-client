import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <p>this is my toy category</p>
    </div>
  );
};

export default Categories;
