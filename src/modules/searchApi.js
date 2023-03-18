const searchMeal = async (mealName) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return false;
  }
};

export default searchMeal;
