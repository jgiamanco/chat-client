import { PropsWithChildren, useState } from "react";

import { GiphyContext } from "../hooks/useGiphyContext";

/**
 * A convenience wrapper around React's default Context.Provider.
 *
 * @param props the props.
 * @constructor
 */
export const GiphyContextProvider = (props: PropsWithChildren<unknown>) => {
  const [giphyState, setGiphyState] = useState(false);
  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      {props.children}
    </GiphyContext.Provider>
  );
};
