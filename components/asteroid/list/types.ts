import { ComponentType } from "react";
import { Asteroids } from "@/model";

export interface AsteroidListProps {
  asteroids: Asteroids;
  EmptyComponent: ComponentType;
  FooterComponent?: ComponentType;
  onEndReached?: () => void;
}
