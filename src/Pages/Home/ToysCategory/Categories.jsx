import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [toysTab, setToysTab] = useState([1]);
  useEffect(() => {
    fetch("categories.json")
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
    toysTab === 1
      ? actionToys
      : toysTab === 2
      ? buildingToys
      : toysTab === 3
      ? plushToys
      : "";
  console.log(allCategories);

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <div
          onClick={() => activeTab(1)}
          role="tab"
          className={toysTab === 1 ? "tab tab-active" : "tab"}
        >
          Action Figures
          <div></div>
        </div>
        <div
          onClick={() => activeTab(2)}
          role="tab"
          className={toysTab === 2 ? "tab tab-active" : "tab"}
        >
          Building Toys
        </div>
        <div
          onClick={() => activeTab(3)}
          role="tab"
          className={toysTab === 3 ? "tab tab-active" : "tab"}
        >
          Plush Toys
        </div>
      </div>
    </div>
  );
};

export default Categories;
