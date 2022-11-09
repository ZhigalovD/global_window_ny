import React from "react";
import Main from "../pages/main/Main";
import DoubleWindow from "../pages/double-window/DoubleWindow";
import VinylWindow from "../pages/vinyl-window/VinylWindow";
import GardenWindow from "../pages/garden-window/GardenWindow";
import AwningWindow from "../pages/awning-window/AwningWindow";
import UnstandartWindow from "../pages/unstandart-window/UnstandartWindow";
import SlidingWindow from "../pages/sliding-window/SlidingWindow";
import PanoramicWindow from "../pages/panoramic-window/PanoramicWindow";
import BayWindow from "../pages/bay-window/BayWindow";
import CasementWindow from "../pages/casement-window/CasementWindow";
import ShowerDoor from "../pages/shower-door/ShowerDoor";
import PatioDoors from "../pages/patio-doors/PatioDoors";
import SlidingDoors from "../pages/sliding-doors/SlidingDoors";
import StormDoors from "../pages/storm-doors/StormDoors";
import InteriorDoors from "../pages/interior-doors/InteriorDoors";
import EntryDoors from "../pages/entry-doors/EntryDoors";

export const d = {
  MAIN: "/",
  DOUBLE_WINDOW: "/double-window",
  VINYL_WINDOW: "/vinyl-window",
  GARDEN_WINDOW: "/garden-window",
  AWNING_WINDOW: "/awning-window",
  UNSTANDART_WINDOW: "/unstandart-window",
  SLIDING_WINDOW: "/sliding-window",
  PANORAMIC_WINDOW: "/panoramic-window",
  BAY_WINDOW: "/bay-window",
  CASEMENT_WINDOW: "/casement-window",
  SHOWER_DOOR: "/shower-doors",
  PATIO_DOORS: "/patio-doors",
  SLIDING_DOORS: "/sliding-doors",
  STORM_DOORS: "/storm-doors",
  INTERIOR_DOORS: "/interior-doors",
  ENTRY_DOORS: "/entry-doors"
};

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/",
  DOUBLE_WINDOW = "/double-window",
  VINYL_WINDOW = "/vinyl-window",
  GARDEN_WINDOW = "/garden-window",
  AWNING_WINDOW = "/awning-window",
  UNSTANDART_WINDOW = "/unstandart-window",
  SLIDING_WINDOW = "/sliding-window",
  PANORAMIC_WINDOW = "/panoramic-window",
  BAY_WINDOW = "/bay-window",
  CASEMENT_WINDOW = "/casement-window",
  SHOWER_DOOR = "/shower-doors",
  PATIO_DOORS = "/patio-doors",
  SLIDING_DOORS = "/sliding-doors",
  STORM_DOORS = "/storm-doors",
  INTERIOR_DOORS = "/interior-doors",
  ENTRY_DOORS = "/entry-doors"
}

export const publicRoute: IRoute[] = [
  {
    path: RouteNames.MAIN,
    exact: true,
    component: Main
  },
  {
    path: RouteNames.DOUBLE_WINDOW,
    exact: true,
    component: DoubleWindow
  },
  {
    path: RouteNames.VINYL_WINDOW,
    exact: true,
    component: VinylWindow
  },
  {
    path: RouteNames.GARDEN_WINDOW,
    exact: true,
    component: GardenWindow
  },
  {
    path: RouteNames.AWNING_WINDOW,
    exact: true,
    component: AwningWindow
  },
  {
    path: RouteNames.UNSTANDART_WINDOW,
    exact: true,
    component: UnstandartWindow
  },
  {
    path: RouteNames.SLIDING_WINDOW,
    exact: true,
    component: SlidingWindow
  },
  {
    path: RouteNames.PANORAMIC_WINDOW,
    exact: true,
    component: PanoramicWindow
  },
  {
    path: RouteNames.BAY_WINDOW,
    exact: true,
    component: BayWindow
  },
  {
    path: RouteNames.CASEMENT_WINDOW,
    exact: true,
    component: CasementWindow
  },
  {
    path: RouteNames.SHOWER_DOOR,
    exact: true,
    component: ShowerDoor
  },
  {
    path: RouteNames.PATIO_DOORS,
    exact: true,
    component: PatioDoors
  },
  {
    path: RouteNames.SLIDING_DOORS,
    exact: true,
    component: SlidingDoors
  },
  {
    path: RouteNames.STORM_DOORS,
    exact: true,
    component: StormDoors
  },
  {
    path: RouteNames.INTERIOR_DOORS,
    exact: true,
    component: InteriorDoors
  },
  {
    path: RouteNames.ENTRY_DOORS,
    exact: true,
    component: EntryDoors
  }
];
