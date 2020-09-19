export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToAdd.id
  );

  if (existingWishlistItem) {
    return wishlistItems;
  }
  return [...wishlistItems, { ...wishlistItemToAdd }];
};

export const removeWishlistItem = (wishlistItems, wishlistItemToRemove) => {
   return wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id);
};
