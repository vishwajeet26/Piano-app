import React from 'react';
import styled from 'styled-components';

interface buttonProps {
  isPressed: boolean
}

const Black = styled.button<buttonProps>`
  width: 40px;
  height: 130px;
  background: ${(props) => (props.isPressed ? "#333" : "black")};
  border: solid black 1px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;
  color: white;
  :active {
    background: #333;
  }
`;

const White = styled.button<buttonProps>`
  width: 60px;
  height: 200px;
  background: ${(props) => (props.isPressed ? "#ccc" : "white")};
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: "-20px";
  box-sizing: border-box;
  mragin-top: 30px;
  :active {
    background: #eee;
  }
`;

type Props = {
  color: string;
  note: string;
  keyName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPressed: boolean;
};

const Note: React.FC<Props> = ({ color, note, onClick, keyName, isPressed}) =>{
  return color === "white" ? (
    <White isPressed={isPressed} value={note} onClick={onClick} >
      <div style={{ paddingTop: "140px" }}> {keyName} </div>
    </White>
  ) : (
    <Black isPressed={isPressed} value={note} onClick={onClick}>
      <div style={{ paddingTop: "80px" }}> {keyName} </div>
    </Black>
  );};

export default Note;
