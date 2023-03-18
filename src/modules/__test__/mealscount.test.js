const totalMeals = require('../countMeals.js');

describe('Test the count of Meals on the Homepage', () => {
  test('Should count all meals displayed on the page and return the count', () => {
    const mealsarray1 = [
      { strMeal: 'Banana Pancakes', strMealThumb: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg', idMeal: '52855' },
      { strMeal: 'BBQ Pork Sloppy Joes', strMealThumb: 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg', idMeal: '52995' }];

    const Count = totalMeals(mealsarray1);
    expect(Count).toBe(2);
  });
  test('Should return the count as zero if there are no elements selected', () => {
    const mealsarray = [];
    const Count = totalMeals(mealsarray);
    expect(Count).toBe(0);
  });
});