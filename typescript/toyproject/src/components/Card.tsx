import React from "react";
import styled, {css, keyframes} from "styled-components";
import {darken, lighten} from "polished";

const slideUp = keyframes`
  from {
    transform: translateY(100px);
  }
  to {
    transform: franslateY(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);

  }
  to {
    opacity: 1;
    transform: franslateY(0px);

  }
`;

const CardDiv = styled.div`
  width: 300px;
  height: 400px;
  background: #e1ffe1;
  margin: 5px;
  border-radius: 20px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  &:hover {
    background: ${darken(0.1, "#e1ffe1")};
  }
`;

const ImgBox = styled.img`
  position: relative;
  width: 90%;
  height: 55%;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 0;
  margin-bottom: 0;
`;

const TitleBox = styled.div`
  position: relative;
  height: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const DescriptionBox = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  margin: 0;
`;

const ButtonBox = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: 0;
  border-radius: 4px;
  background-color: #ff5a5a;
  font-size: 25px;
  color: #ffffff;

  &:hover {
    background: ${darken(0.1, "#ff5a5a")};
  }

  &:active {
    background: ${darken(0.2, "#ff5a5a")};
  }
`;

type CardProps = {
  title: string,
  director: string,
  actor: string,
  userRating: string,
  pubDate: string,
  image: string
}

const Card = ({title, director, actor, userRating, pubDate, image}: CardProps) => {
  return (
    <CardDiv>
      <ImgBox src={image} onClick={() => console.log("click")}/>
      <TitleBox>{title}</TitleBox>
      <DescriptionBox>
        {director} {actor} {userRating} {pubDate}
      </DescriptionBox>
      <ButtonBox>
        <Button>Add to WishList</Button>
      </ButtonBox>
    </CardDiv>
  );
};

export default Card;
