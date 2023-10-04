import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = ({ items }) => {
  console.log(">>>", items);
  return (
    <div className='px-4 pt-4 grow grid grid-cols-1 gap-3'>
      {items.map((item) => {
        return (
          <SearchListItem
            key={item.etag}
            {...item.snippet}
            {...item.statistics}
            videoId={item.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default SearchList;
