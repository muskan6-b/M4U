const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${category.imageUrl}`}
        alt={category.name}
        onError={(e) => {
          e.target.src = "fallback-image-url.jpg";
        }}
      />
    </div>
  );
};

export default CategoryCard;
