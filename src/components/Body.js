import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import CategoryCard from "./CategoryCard";
import Chatbot from "./Chatbot";

const Body = () => {
  const [listfRestaurants, setlistofRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("Fetching data..."); // Debugging log
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7955061&lng=76.1282996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("API Response:", json.data.cards); // Debugging the entire response

      // Find the correct array that contains restaurant information

      const restaurantData = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // Extract categories from API response

      // Set data if found, otherwise keep an empty array
      setlistofRestaurants(restaurantData || []);
      setFilteredRestaurant(restaurantData || []);

      const categoryDataCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.imageGridCards?.info
      );

      const categoryData =
        categoryDataCard?.card?.card?.imageGridCards?.info.map((category) => ({
          id: category?.id,
          name: category?.action?.text,
          imageUrl: category?.imageId,
          link: category?.action?.link,
        })) || [];

      setCategories(categoryData); // Add this line to set categories
      console.log("Extracted Categories:", categoryData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //conditional rendering////////////////////////
  // if (listfRestaurants.length === 0) {
  //   return <Shimmer />; // Show shimmer instead of an error
  // }
  return listfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              ); //remind this
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = FilteredRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* 🍽️ "What's on Your Mind?" Categories Section */}
      {Categories.length > 0 && (
        <div className="categories-container">
          <h2 className="categories-title">What's on Your Mind?</h2>

          <div className="categories">
            {Categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      )}

      <div className="res-container">
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
