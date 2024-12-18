import React, { useContext, Dispatch, SetStateAction } from "react";

export type GiphyContextValue = {
  giphyState: boolean;
  setGiphyState: Dispatch<SetStateAction<boolean>>;
};

export const GiphyContext = React.createContext<GiphyContextValue | null>(null);
/**
 * A convenience hook for consuming GiphyContext value.
 */
export const useGiphyContext = () => {
  return useContext(GiphyContext) as GiphyContextValue;
};
