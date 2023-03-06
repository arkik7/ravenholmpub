export const allItemsQuery = () => {
  const query = `*[_type == "item"] | order(_createdAt desc){
    ...,
    categories[]->,
    allergens[]->
  }`;

  return query;
};


export const itemDetailQuery = (slug: string | string[]) => {
  const query = `*[_type == "item" && slug.current == '${slug}']{
    ...,
  }`;
  return query;
};

export const dailyMenuQuery = () => {
  const query = `*[_type == "dailyMenu"] | order(_createdAt desc){
    ...,
    foods[]->
  }`;

  return query;
};