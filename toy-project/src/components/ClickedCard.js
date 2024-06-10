import React from "react";
import styled, { keyframes, css } from "styled-components";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const ImgBox = styled.img`
  width: 500px;
  height: 300px;
`

const BigCard = styled.div` 
  width: 600px;
  height: 450px;
  background: #e1ffe1;
`;

function ClickedCard({ props, visible }) {
  const { title, director, actor, userRating, pubDate, img } = props;
  if (!visible) return null;
  return (
    <DarkBackground>
      <BigCard> 
        <h3>{title}</h3>
        <ImgBox src={img} /> <br/>
        감독: {director} <br/>
        출연진: {actor} <br/>
        평점: {userRating} <br/>
        개봉일: {pubDate} <br/>
      </BigCard>
    </DarkBackground>
  );
}

export default ClickedCard;
