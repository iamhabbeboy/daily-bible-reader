const initialState = {
  isLoading: true,
  verse: {
    book: "Genesis",
    chapter: 1,
    contents: [
      {
        verse: 1,
        text: "In the beginning, the Lord created the heaven and the earth."
      }
    ]
  },
  pagination: 0
};
export const state = { ...initialState };

export default state;
