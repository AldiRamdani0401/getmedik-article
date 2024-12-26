import { createContext, useContext } from "solid-js";

// Create Context
const RenderInParentContext = createContext();

// Provider Component
export const RenderInParentProvider = (props) => {
  return (
    <RenderInParentContext.Provider value={props.state}>
      {props.children}
    </RenderInParentContext.Provider>
  );
};

// Hook to Use Context
export const useRenderInParent = () => {
  const context = useContext(RenderInParentContext);
  if (!context) {
    throw new Error(
      "useContentHeader must be used within a ContentHeaderProvider"
    );
  }
  return context;
};
