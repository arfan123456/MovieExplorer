const BASE_URL="https://api.tvmaze.com";

export const getAllShows=async()=>
{
  const result=await fetch(`${BASE_URL}/shows`);
  if(!result.ok)
  {
    throw new Error("Failed to fetch shows");
  }
  const data=await result.json();
  return data;
};
export const searchShows=async(query)=>
{
  const result=await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if(!result.ok)
  {
    throw new Error("Failed to search shows");
  }
  const data=await result.json();
  return data.map((item)=>item.show);
};