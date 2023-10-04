import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import SearchList from "./SearchList";
import { API_KEY_AUTH } from "../utils/Constants";
const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchListResponse, setSearchListResponse] = useState(null);
  // const [searchQuery, setSearchQuery] = useState;
  useEffect(() => {
    searchResults(searchParams.get("search_query"));
  }, [searchParams.get("search_query")]);

  async function searchResults(value) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=${API_KEY_AUTH}`
      );
      const data = await response.json();
      setSearchListResponse(data?.items);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  const flag = useSelector((store) => {
    return store.toggle.flag;
  });
  let str = flag ? "basis-10/12" : "basis:auto";
  return (
    <div className={str + " flex flex-col h-full"}>
      <ButtonList />
      {searchListResponse && <SearchList items={searchListResponse} />}
    </div>
  );
};

export default Results;
