import CategoryItem from "../category-item/category-item.component";

import './category-list.styles.scss'

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {
        categories.map((category, index) => {
          return <CategoryItem key={`${category.id}-${index}`} category={category}/>
        })
      }
    </div>
  )
};

export default CategoryList;