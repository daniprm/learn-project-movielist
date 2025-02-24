"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const WatchedButton = ({ movieId }: { movieId: string }) => {
  const [isInWatched, setIsInWatched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const resWatchedId = await fetch("http://localhost:5000/watched");
      const WatchedId = await resWatchedId.json();

      const WatchedIdFound = WatchedId.find(
        (item: { id: string }) => item.id === movieId
      );

      if (WatchedIdFound) setIsInWatched(true);
    };
    fetchData();
  }, [movieId]);

  const handleAddWatched = () => {
    if (isInWatched) {
      fetch(`http://localhost:5000/watched/${movieId}`, {
        method: "DELETE",
      });
      fetch("http://localhost:5000/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: movieId }),
      });
      setIsInWatched(false);
    } else {
      fetch("http://localhost:5000/watched", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: movieId }),
      });
      fetch(`http://localhost:5000/watchlist/${movieId}`, {
        method: "DELETE",
      });
      setIsInWatched(true);
    }
  };

  return isInWatched ? (
    <Button
      variant="contained"
      className={"absolute top-2 left-2 font-bold"}
      onClick={() => handleAddWatched()}
    >
      Watched
    </Button>
  ) : (
    <Button
      variant="contained"
      className={
        "absolute top-2 left-2 font-bold bg-white text-[#0079FF] border-2 hover:bg-white/85"
      }
      onClick={() => handleAddWatched()}
    >
      Watch
    </Button>
  );
};

export default WatchedButton;
