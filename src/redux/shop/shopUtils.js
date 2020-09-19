export const searchCollectionItem = (collections, searchInput) => {
    const collectionItems = Object.values(collections)
console.log(collectionItems);
   return collectionItems.filter((collection) =>
     `${collection}`.toLowerCase().includes(searchInput.toLowerCase())
   );
}

