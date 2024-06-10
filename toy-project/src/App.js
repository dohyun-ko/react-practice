import React, { useState, useReducer } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import Card from "./components/Card";
import ClickedCard from "./components/ClickedCard";

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [movieList, setMovieList] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [toggleClickedCard, setTCC] = useState(false);
  const [clickedCard, setClickedCard] = useState({
    title: "",
    director: "",
    actor: "",
    userRating: "",
    pubDate: "",
    image: "",
  });
  const search = async () => {
    const CLIENT_ID = "FJTwJywxvwZYsBCgPMj5";
    const CLIENT_SECRET = "P60niBFHma";

    try {
      const response = await axios.get("/v1/search/movie.json", {
        params: {
          query: searchKeyword || "star",
          display: 20,
        },
        headers: {
          "Content-Type": "plain/text",
          "X-Naver-Client-Id": CLIENT_ID,
          "X-Naver-Client-Secret": CLIENT_SECRET,
        },
      });
      console.log(response.data.items);
      setMovieList(response.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const onInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onCardClick = (e) => {
    setClickedCard(e.target);
    setTCC(true);
    console.log("hey");
  };

  return (
    <>
      <div>
        <input onChange={onInputChange} />{" "}
        <button onClick={search}>검색</button>
      </div>
      <CardList>
        {movieList &&
          movieList.map((movie, index) => (
            <Card
              
              key={index}
              title={movie.title}
              director={movie.director}
              actor={movie.actor}
              userRating={movie.userRating}
              pubDate={movie.pubDate}
              image={movie.image}
            />
          ))}
      </CardList>
      <ClickedCard props={clickedCard} visible={toggleClickedCard} />
    </>
  );
}

export default App;
