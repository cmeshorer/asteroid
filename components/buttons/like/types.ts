import { Asteroid } from "@/models/asteroids";

export interface LikeButtonProps {
  asteroidId: Asteroid["id"];
  isLiked: boolean;
}
