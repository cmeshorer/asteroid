import { Route } from "expo-router";
import { ComponentType } from "react";
import { Asteroid } from "@/models/asteroids";

export interface AsteroidListProps {
  asteroids: Asteroid[];
  detailsPath: Route;
  EmptyComponent: ComponentType;
  FooterComponent?: ComponentType;
  onEndReached?: () => void;
}
