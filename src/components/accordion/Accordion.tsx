import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type AccordionProps = {
  question: string;
  answer: string;
};

export const Accordion = ({ question, answer }: AccordionProps) => {
  const butRef = useRef<any>(null);
  useEffect(() => {
    butRef.current.addEventListener("click", function (e: any) {
      butRef.current.classList.toggle("active");
      const text = butRef.current.nextElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = "";
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  }, []);

  return (
    <AccordionContainer>
      <AccordionBtn ref={butRef} className="rounded-[12px]">
        <Question className="font-eudoxus-bold text-primary text-base sm:text-lg">
          {question}
        </Question>
        <i className="fi fi-rr-caret-down"></i>
      </AccordionBtn>
      <Panel>
        <p className="font-inter font-medium text-lg text-[#53545C]">
          {answer}
        </p>
      </Panel>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const AccordionBtn = styled.button`
  width: 100%;
  padding: 24px 24px;
  border: none;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: 0.4s;
  text-align: left;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 16px 40px 0px #585c5f1a;

  i {
    width: 25px;
    height: 25px;
    font-size: 1.5rem;
    color: var(--black-green);
    transition: 0.5s ease;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  &.active i {
    transform: rotateZ(180deg);
  }
`;

const Question = styled.h3`
  font-weight: 700;
`;

const Panel = styled.div`
  font-size: 0.9rem;
  line-height: 1.5rem;
  background-color: white;
  overflow: hidden;
  transition: 0.5s;
  max-height: 0;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  p {
    padding: 1rem 2rem;
    color: var(--black-green);
  }
`;
