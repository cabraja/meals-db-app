export const transofrmCategories = (data) => {
  const result = data.categories.map((item) => {
    const { idCategory, strCategory, strCategoryThumb } = item;
    return {
      id: idCategory,
      name: strCategory,
      image: strCategoryThumb,
    };
  });

  return result;
};
