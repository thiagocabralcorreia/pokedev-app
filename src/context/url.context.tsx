import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
} from "react";

interface URLChildren {
	children: ReactNode;
}

export type URLContextState = {
	currentURL: string;
	setCurrentURL: (value: string) => void;
};

const contextDefaultValues: URLContextState = {
	currentURL: '',
	setCurrentURL: undefined,
};

export const URLContext = createContext<URLContextState>(
  contextDefaultValues
);

export const URLProvider =  ({ children }: URLChildren) => {
  const [ currentURL, setCurrentURL ] = useState('');

  return (
    <URLContext.Provider value={{ currentURL, setCurrentURL }}>
      {children}
    </URLContext.Provider>
  );
};

export function useURL() {
	const context = useContext(URLContext);
	const { currentURL, setCurrentURL } = context;
	return { currentURL, setCurrentURL };
};
