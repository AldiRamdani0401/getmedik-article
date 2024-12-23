import { createContext, useContext } from "solid-js";

// Create Context
const ContentHeaderContext = createContext();

// Provider Component
export const ContentHeaderProvider = (props) => {
  return (
    <ContentHeaderContext.Provider value={props.state}>
      {props.children}
    </ContentHeaderContext.Provider>
  );
};

// Hook to Use Context
export const useContentHeader = () => {
  const context = useContext(ContentHeaderContext);
  if (!context) {
    throw new Error("useContentHeader must be used within a ContentHeaderProvider");
  }
  return context;
};
