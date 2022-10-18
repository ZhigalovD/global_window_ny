import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoute, RouteNames } from "../router";

const AppRouter: FC = () => {

  return (
      <Routes>
          {publicRoute.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      </Routes>
  )
};

export default AppRouter;
