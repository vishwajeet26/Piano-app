import React, { memo } from "react";
import styled from "styled-components";
import Note from "./Note";
import { NoteType } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

type Props = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pressedKey: string;
};

const Octave: React.FC<Props> = ({ notes, clickHandler, pressedKey }) => (
  <Wrapper>
    <div>
      {notes.map((element: any) => {
        const isPressedFinder = (): boolean => element.key === pressedKey;
        return (
          <Note
            keyName={element.key}
            key={element.note}
            color={element.color}
            note={element.note}
            isPressed={isPressedFinder()}
            onClick={clickHandler}
          />
        );
      })}
    </div>
  </Wrapper>
);

export default memo(Octave);
