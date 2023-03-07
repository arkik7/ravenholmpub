export const allItemsQuery = () => {
  const query = `*[_type == "item" && !(_id in path('drafts.**'))] | order(_createdAt desc){
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
  const query = `*[_type == "dailyMenu" && !(_id in path('drafts.**'))] | order(_createdAt asc){
    ...,
    foods[]->{
      ...,
      allergens[]->
    }
  }`;

  return query;
};