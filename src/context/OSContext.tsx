import { createContext, useReducer } from "react";

import { appsConfig } from "@/apps.config";

// --- types ---
export interface AppData {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  z: number;
  width?: number;
  height?: number;
}

interface OSState {
  apps: AppData[];
  maxZ: number;
  activeAppId: string | null;
}

type Action =
  | { type: "OPEN"; id: string }
  | { type: "CLOSE"; id: string }
  | { type: "MINIMIZE"; id: string }
  | { type: "MAXIMIZE"; id: string }
  | { type: "FOCUS"; id: string }
  | { type: "UPDATE_POS"; id: string; x: number; y: number };

// create initial apps from apps.config file
const initialApps: AppData[] = appsConfig.map((app, index) => ({
  id: app.id,
  title: app.title,
  icon: app.icon,
  isOpen: false, // or < index === 0 >to open the first app by default
  isMaximized: false,
  isMinimized: false,
  x: 100 + index * 50, // add 50px to the next app
  y: 50 + index * 50,
  z: index + 1,
  width: app.width,
  height: app.height,
}));

// --- main app state ---
const initialState: OSState = {
  apps: initialApps,
  maxZ: 10,
  activeAppId: "safari",
};

// --- reducer to send actions ---
const osReducer = (state: OSState, action: Action): OSState => {
  switch (action.type) {
    case "OPEN": {
      const nextZ = state.maxZ + 1;
      return {
        ...state,
        maxZ: nextZ,
        activeAppId: action.id,
        apps: state.apps.map((app) =>
          app.id === action.id
            ? { ...app, isOpen: true, isMinimized: false, z: nextZ }
            : app
        ),
      };
    }
    case "CLOSE":
      return {
        ...state,
        activeAppId: null, // Reset active app
        apps: state.apps.map((app) =>
          app.id === action.id
            ? { ...app, isOpen: false, isMaximized: false }
            : app
        ),
      };
    case "MINIMIZE":
      return {
        ...state,
        activeAppId: null,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, isMinimized: true } : app
        ),
      };
    case "MAXIMIZE":
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, isMaximized: !app.isMaximized } : app
        ),
      };
    case "FOCUS": {
      const nextZ = state.maxZ + 1;
      return {
        ...state,
        maxZ: nextZ,
        activeAppId: action.id,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, z: nextZ } : app
        ),
      };
    }
    case "UPDATE_POS":
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, x: action.x, y: action.y } : app
        ),
      };
    default:
      return state;
  }
};

// --- create context ---
export const OSContext = createContext<
  { state: OSState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const OSProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(osReducer, initialState);

  return (
    <OSContext.Provider value={{ state, dispatch }}>
      {children}
    </OSContext.Provider>
  );
};
