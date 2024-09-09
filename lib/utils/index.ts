import React from "react";

export default function scrollHandler(
  cardsContainerRef: React.RefObject<HTMLElement>,
  cardRef: React.RefObject<HTMLElement>,
  left?: boolean
): void {
  if (cardsContainerRef.current && cardRef.current) {
    const cardWidth = cardRef.current.clientWidth;
    const scrollAmount = cardWidth;

    cardsContainerRef.current.scrollBy({
      left: left ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}
