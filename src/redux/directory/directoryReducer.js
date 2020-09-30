const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://source.unsplash.com/d6pLNFVZt_4/1200x700",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "women",
      imageUrl: "https://source.unsplash.com/bWUOx0SaSAk/1200x700",
      size: "large",
      id: 2,
      linkUrl: "women",
    },
    {
      title: "men",
      imageUrl: "https://source.unsplash.com/SnwHgwQ085I/1200x700",
      size: "large",
      id: 4,
      linkUrl: "men",
    },
    {
      title: "sneakers",
      imageUrl: "https://source.unsplash.com/164_6wVEHfI/1200x700",
      id: 3,
      linkUrl: "sneakers",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
