export const postLike = async (likeData) => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/likes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/Json',
          charset: 'utf-8',
        },
        body: JSON.stringify(likeData),
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

export const getLikes = async () => {
  const getStatus = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/likes',
    {
      method: 'GET',
    },
  );
  const commentResponse = await getStatus.json();
  const likesArray = Array.isArray(commentResponse) ? commentResponse : [];
  return likesArray;
};
