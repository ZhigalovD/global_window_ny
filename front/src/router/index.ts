import React from "react";
import Main from "../pages/main/Main";

export const d = {
  MAIN: "/"
};

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/"
}

export const publicRoute: IRoute[] = [
  {
    path: RouteNames.MAIN,
    exact: true,
    component: Main
  }
];
