import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [toysTab, setToysTab] = useState([1]);
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const actionToys = categories.filter((c) => c.category === "Action Figures");
  const buildingToys = categories.filter(
    (action) => action.category === "Building Toys"
  );
  const plushToys = categories.filter((c) => c.category === "Plush Toys");

  const activeTab = (index) => {
    setToysTab(index);
  };

  const allCategories =
    toysTab == 1
      ? actionToys
      : toysTab == 2
      ? buildingToys
      : toysTab == 3
      ? plushToys
      : "";
  console.log(allCategories);

  return (
    <div>
      <div
        role="tablist"
        className="tabs tabs-lifted tabs-lg bg-orange-400 relative z-20 rounded-t-xl "
      >
        <div
          onClick={() => activeTab(1)}
          role="tab"
          className={
            toysTab == 1 ? "tab tab-active  text-orange-400 font-bold" : "tab "
          }
        >
          Action Figures
          <div></div>
        </div>
        <div
          onClick={() => activeTab(2)}
          role="tab"
          className={
            toysTab == 2 ? "tab tab-active  text-orange-400 font-bold" : "tab"
          }
        >
          Building Toys
        </div>
        <div
          onClick={() => activeTab(3)}
          role="tab"
          className={
            toysTab == 3 ? "tab tab-active  text-orange-400 font-bold" : "tab "
          }
        >
          Plush Toys
        </div>
      </div>
      <div className="toy-container border-2 border-gray-300 p-4 rounded-lg relative -top-3">
        {allCategories.map((categories) => (
          <CategoryCard
            key={categories._id}
            categories={categories}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
