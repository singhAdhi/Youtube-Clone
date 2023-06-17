import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(a);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="hamburger-icon"
        />
        <img
          className="h-10 mx-3 w-20"
          src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
          alt="youtube-icon"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-2 w-1/2 border border-gray-500 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 px-5 py-2 rounded-r-full">
            search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((cur) => (
                <li className="py-2 shadow-lg hover:bg-gray-100">{cur}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end col-span-1">
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
