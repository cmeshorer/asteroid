import { Route } from "expo-router";
import { Asteroid } from "@/model";

export interface AsteroidProps {
  asteroid: Asteroid;
  detailsPath: Route;
}
