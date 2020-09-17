export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToAdd.id
  );

  if (existingWishlistItem) {
    return wishlistItems;
  }
  return [...wishlistItems, { ...wishlistItemToAdd }];
};

export const removeItemFromWishlist = (wishlistItems, wishlistItemToRemove) => {
  const filteredlistitems = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id
  );

  return [...filteredlistitems]
};
