const initialState = {
  isLoading: true,
  verse: {
    book: "",
    chapter: 0,
    contents: [
      {
        verse: 0,
        text: "In the beginning, the Lord created the heaven and the earth."
      }
    ]
  },
  pagination: 0
};
export const state = { ...initialState };

export default state;
