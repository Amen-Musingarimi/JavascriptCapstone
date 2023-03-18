export const postComment = async (commentData) => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/Json',
          charset: 'utf-8',
        },
        body: JSON.stringify(commentData),
      },
    );

    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export const getComments = async (mealId) => {
  const getStatus = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/comments?item_id=${mealId}`,
    {
      method: 'GET',
    },
  );
  const commentResponse = await getStatus.json();
  return commentResponse;
};
