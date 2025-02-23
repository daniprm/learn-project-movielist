"use client";

import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const WatchlistButton = ({ movieId }: { movieId: string }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const resWatchlistId = await fetch("http://localhost:5000/watchlist");
      const watchlistId = await resWatchlistId.json();

      const watchlistIdFound = watchlistId.find(
        (item: { id: string }) => item.id === movieId
      );

      if (watchlistIdFound) setIsInWatchlist(true);
    };
    fetchData();
  }, [movieId]);

  const handleAddWatchlist = () => {
    if (isInWatchlist) {
      fetch(`http://localhost:5000/watchlist/${movieId}`, {
        method: "DELETE",
      });
      setIsInWatchlist(false);
    } else {
      fetch("http://localhost:5000/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: movieId }),
      });
      setIsInWatchlist(true);
    }
  };

  return (
    <IconButton
      className={`absolute top-2 right-2 ${
        isInWatchlist
          ? "bg-[#CA3E47] hover:bg-[#CA3E47]/80"
          : "bg-black/65 hover:bg-black"
      }`}
      onClick={() => handleAddWatchlist()}
    >
      {isInWatchlist ? (
        <FavoriteIcon className="text-white" />
      ) : (
        <FavoriteBorderIcon className="text-white" />
      )}
    </IconButton>
  );
};

export default WatchlistButton;
