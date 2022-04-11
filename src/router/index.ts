import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRouter {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRouter[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRouter[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
