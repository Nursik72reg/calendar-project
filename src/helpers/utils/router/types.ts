import React from "react";

export interface IRouter {
    path: string;
    component: React.ComponentType;
    exact?: boolean
}