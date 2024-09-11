import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/firebase";

export function scrollHandler(
  cardsContainerRef: React.RefObject<HTMLElement>,
  cardRef: React.RefObject<HTMLElement>,
  left?: boolean
): void {
  if (cardsContainerRef.current && cardRef.current) {
    const cardWidth = cardRef.current.clientWidth;
    const scrollAmount = 400;
    cardsContainerRef.current.scrollBy({
      left: left ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}

export const registerWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = async (): Promise<void> => {
  return signOut(auth);
};
