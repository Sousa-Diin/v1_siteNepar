import React from "react"
import styled, { keyframes } from "styled-components"
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
  }
`
const fadeTop = keyframes`
  from {
    opacity: 0;
		transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
		transform: translate3d(0, 0, 0);
  }
`
export const FadeIn = ({
  duration = 300,
  delay = 0,
  children,
  fade = "fadeIn",
  ...delegated
}) => {
  return fade === "fadeIn" ? (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  ) : fade === "bottom" ? (
    <WrapperBottom
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </WrapperBottom>
  ) : fade === "top" ? (
    <WrapperTop
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </WrapperTop>
  ) : null
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const WrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeBottom};
    animation-fill-mode: backwards;
  }
`
const WrapperTop = styled.div`
  display: flex;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeTop};
    animation-fill-mode: backwards;
  }
`
