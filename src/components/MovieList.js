import React, { useState, useEffect } from "react";
import MovieDataService from "../services/MovieLayout";
import { Menu, Transition } from "@headlessui/react";
import MenuItem from "./MenuItem";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = "";
  const [ratings, setRatings] = useState(["All Ratings"]);

  // useEffect(() => {
  //   retrieveMovies();
  //   retrieveRatings();
  // }, []);

  // const retrieveMovies = () => {
  //   MovieDataService.getAll()
  //     .then((response) => {
  //       console.log(response.data);
  //       setMovies(response.data.movies);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // const retrieveRatings = () => {
  //   MovieDataService.getRatings()
  //     .then((response) => {
  //       console.log(response.data);
  //       //start with 'All ratings' if user doesn't specify any ratings
  //       setRatings(["All Ratings"].concat(response.data));
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      <div className="container mx-auto flex justify-between space-x-20">
        <form className="w-full">
            <input
              className="inline-flex justify-center w-full rounded-md border 
              border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 
              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500"
              placeholder="Search By title"
              type="text"
              name=""
              id=""
            />
          <button className="mt-2 rounded-md bg-yellow-500 hover:bg-yellow-300 p-3">
            Search
          </button>
        </form>
        <Menu as="div" className="relative w-full">
          {({ open }) => (
            <>
              {/* Menu Button */}
              <Menu.Button
                className="inline-flex justify-center w-full rounded-md border 
            border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500"
              >
                All Ratings
              </Menu.Button>

              {/* Menu Items */}
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-75 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items
                  className="origin-top-right absolute  right-0 mt-2 rounded-md shadow-lg
                           bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100
                             focus:outline-none w-full"
                            //  onClick={}
                >
                  <div className="py-1">
                    <MenuItem name="AO" />
                    <MenuItem name="APPROVED" />
                    <MenuItem name="G" />
                    <MenuItem name="GP" />
                    <MenuItem name="M" />
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}

export default MovieList;
