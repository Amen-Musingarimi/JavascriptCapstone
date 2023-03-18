const getMeals = async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=American',
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return false;
  }
};

export default getMeals;