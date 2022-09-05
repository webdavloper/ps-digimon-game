import styled, { css, keyframes } from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1728;
`;

export const Table = styled.ul`
  width: 100%;
  max-width: 1622px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 1rem;
`;

export const Card = styled.li`
  width: 132px;
  height: 174px;
  perspective: 1000px;

  cursor: pointer;
`;

interface CardInnerProps {
  visibility?: "visible" | "hidden";
}

const show = keyframes`
  to {
    transform: rotateY(180deg);
  }
`;

const hide = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const CardInner = styled.div<CardInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${(props) =>
    props.visibility === "visible"
      ? css`
          animation: ${show} 0.6s forwards;
        `
      : css`
          animation: ${hide} 0.6s forwards;
        `}
`;

interface CardFrontProps {
  level:
    | "In Training"
    | "Rookie"
    | "Champion"
    | "Ultimate"
    | "Fresh"
    | "Mega"
    | "Armor";
}

const levels = {
  "In Training": "#319900",
  Rookie: "#995C00",
  Champion: "#8D0099",
  Ultimate: "#009974",
  Fresh: "#8D9900",
  Mega: "#009099",
  Armor: "#990000",
};

const BaseCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background: #ffffff;
  border-radius: 8px;

  overflow: hidden;
`;

export const CardFront = styled(BaseCard)<CardFrontProps>`
  padding: 24px 8px;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.2);

  h2 {
    font-size: 1rem;

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #4d4d4d;
  }

  img {
    max-width: 56px;
  }

  span {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: ${(props) => levels[props.level]};
  }
`;

export const CardBack = styled(BaseCard)`
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.16);
  background: #f2f2f2;
  border: 10px solid #ffffff;

  > div {
    position: relative;
    top: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 19px;
    gap: 16px;
    transform: rotate(-45deg);

    span {
      white-space: nowrap;
      pointer-events: none;

      display: flex;
      font-weight: 900;
      font-size: 16px;

      text-align: center;
      letter-spacing: 0.3em;
      text-transform: uppercase;

      color: #b3b3b3;
    }
  }
`;
