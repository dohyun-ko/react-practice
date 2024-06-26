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

type ClickedCardProps = {
  props: object,
  visible: boolean,
}

interface CardProps {
  title?: string, director?: string, actor?: string, userRating?: string, pubDate?: string, image?: string
}

function ClickedCard({ props, visible }: ClickedCardProps) {
  const { title, director, actor, userRating, pubDate, image }: CardProps = props;
  if (!visible) return null;
  return (
    <DarkBackground>
      <BigCard>
        <h3>{title}</h3>
        <ImgBox src={image} /> <br/>
        감독: {director} <br/>
        출연진: {actor} <br/>
        평점: {userRating} <br/>
        개봉일: {pubDate} <br/>
      </BigCard>
    </DarkBackground>
  );
}

export default ClickedCard;
