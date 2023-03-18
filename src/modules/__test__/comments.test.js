const totalComments = require('../countComments.js');

describe('totalComments', () => {
  it('should return the total number of comments in an array', () => {
    const comments = ['Nice post!', 'Thanks for sharing', 'I agree'];
    const result = totalComments(comments);
    expect(result).toEqual(3);
  });

  it('should return 0 if the input array is empty', () => {
    const emptyArray = [];
    const result = totalComments(emptyArray);
    expect(result).toEqual(0);
  });
});
