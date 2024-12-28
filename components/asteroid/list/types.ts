import { Route } from "expo-router";
import { ComponentType } from "react";
import { Asteroids } from "@/model";

export interface AsteroidListProps {
  asteroids: Asteroids;
  detailsPath: Route;
  EmptyComponent: ComponentType;
  FooterComponent?: ComponentType;
  onEndReached?: () => void;
}
