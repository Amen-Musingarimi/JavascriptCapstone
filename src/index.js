import './style.css';
import getMeals from './modules/getMeals.js';
import { postComment, getComments } from './modules/commentsApi.js';
import totalComments from './modules/countComments.js';
import totalMeals from './modules/countMeals.js';
import { postLike, getLikes } from './modules/likesApi.js';

const getNumberOfLikes = (response, likes) => {
  const mealLikes = new Map();

  response.forEach((meal) => {
    let num = 0;
    for (let i = 0; i < likes.length; i += 1) {
      if (meal.idMeal === likes[i].item_id) {
        num = likes[i].likes;
        break;
      }
    }
    mealLikes.set(meal.idMeal, num);
  });
  return mealLikes;
};

const renderMeal = async () => {
  const response = await getMeals();

  const likes = await getLikes();
  const numberOfLikes = getNumberOfLikes(response, likes);

  const mealsListContainer = document.querySelector('.mealsListContainer');
  mealsListContainer.innerHTML = '';

  const mealItem = response.map(
    (data) => `
    <article class="mealCard" id=${data.idMeal}>
            <img src=${data.strMealThumb} alt=${data.strMeal} />
            <div class="mealDetail">
              <h2 class="mealHeading">${data.strMeal}</h2>
              <a href="#" class="likeBtn">
                <i class="fa-solid fa-heart"></i>
              </a>
              <span class="likesNumber">${numberOfLikes.get(data.idMeal)}</span>
            </div>
            <button type="button" class="commentBtn seeCommentsBtn">Comments</button>
          </article>
  `,
  );
  mealsListContainer.innerHTML = mealItem.join('');

  const displayLikes = async (targetId, likesTotal) => {
    const likesArray = await getLikes();

    for (let n = 0; n < likesArray.length; n += 1) {
      if (likesArray[n].item_id === targetId) {
        likesTotal.innerHTML = likesArray[n].likes;
      }
    }
  };

  const likeBtns = document.querySelectorAll('.likeBtn');
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      likeBtn.classList.add('color');
      const id = event.target.parentNode.parentNode.parentNode.getAttribute('id');
      await postLike({
        item_id: id,
      });
      const likesTotal = event.target.parentNode.nextSibling.nextSibling;

      displayLikes(id, likesTotal);
    });
  });

  const seeCommentsBtns = document.querySelectorAll('.seeCommentsBtn');
  const popupWindow = document.querySelector('.popupWindow');

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  seeCommentsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const mealId = e.target.parentNode.getAttribute('id');
      const mealData = response.find((meal) => meal.idMeal === mealId);
      popupWindow.classList.remove('hide');
      popupWindow.classList.add('overlay');
      scrollUp();
      popupWindow.innerHTML = `
        <article class="popupCard" id="${mealData.idMeal}">        
        <img class="popupCardImage" src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />                
          <h2 class="mealTitle">${mealData.strMeal}</h2>
          <h3 class="commentsCount">Total Comments(<p class="commentsTotal"></p>)</h3>
          <ul class="commentsList">            
          </ul>       
            <h3 class="commentsHeading">Add a comment</h3>
              <form action="">
                <label for="nameInput">
                  <input
                    name="nameInput"
                    id="nameinput"
                    class="nameInput"
                    type="text"
                    max="30"
                    placeholder="Your Name"
                    required
                  />
                </label>
                <label for="textArea">
                  <textarea
                    name="textArea"
                    id="textArea"
                    class="textArea"
                    cols="30"
                    rows="10"
                    maxlength="200"
                    placeholder="Your Comment"
                    required
                  ></textarea>
                </label>
                <button class="submitCommentBtn" type="button">Comment</button>
              </form>         
        </article>
        <a href="#" class="closeBtn"><i class="fa-sharp fa-solid fa-xmark"></i></a>
      `;

      const closePopupBtn = document.querySelector('.closeBtn');
      closePopupBtn.addEventListener('click', () => {
        popupWindow.classList.add('hide');
        popupWindow.classList.remove('overlay');
      });

      const submitCommentBtn = document.querySelector('.submitCommentBtn');
      const nameInput = document.querySelector('.nameInput');
      const commentInput = document.querySelector('.textArea');

      const submitcomment = async () => {
        const nameInputValue = nameInput.value.trim();
        const textAreaValue = commentInput.value.trim();
        if (nameInput.value.trim() !== '' && commentInput.value.trim() !== '') {
          await postComment({
            item_id: mealId,
            username: nameInputValue,
            comment: textAreaValue,
          });
          document.querySelector('form').reset();
        }
      };

      const displayComments = async () => {
        const response = await getComments(mealId);
        const totalCommentsNumber = document.querySelector('.commentsTotal');
        const total = totalComments(response);
        if (!total) {
          totalCommentsNumber.innerHTML = 0;
        } else {
          totalCommentsNumber.innerHTML = total;
        }

        const listContainer = document.querySelector('.commentsList');
        listContainer.innerHTML = '';

        const commentItem = response.map(
          (data) => `
        <li class="commentitem">
        <p class="date">${data.creation_date}: </p>
        <p class="username">${data.username}: </p>
        <p class="comment">${data.comment}</p>
      </li>
        `,
        );
        listContainer.innerHTML = commentItem.join('');
      };

      submitCommentBtn.addEventListener('click', async () => {
        await submitcomment();
        displayComments();
      });

      displayComments();
    });
  });
};
const displayMeals = async () => {
  const totalMealsNumber = document.querySelector('.totalMeals');
  const response = await getMeals();
  const total = totalMeals(response);
  totalMealsNumber.innerHTML = total;
};
displayMeals();

window.addEventListener('DOMContentLoaded', () => {
  renderMeal();
});
