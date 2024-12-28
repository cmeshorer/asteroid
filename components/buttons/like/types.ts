import { Asteroid } from "@/model";

export interface LikeButtonProps {
  asteroidId: Asteroid["id"];
  isLiked: boolean;
}
