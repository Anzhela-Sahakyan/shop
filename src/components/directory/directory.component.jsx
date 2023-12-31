import CategoryItem from "../category-item/Category-item.component";

import "./directory.style.scss";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
