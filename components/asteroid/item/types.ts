import { Route } from "expo-router";
import { Asteroid } from "@/models/asteroids";

export interface AsteroidProps {
  asteroid: Asteroid;
  detailsPath: Route;
}
