import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Asteroid } from "./model";

export interface AsteroidsState {
  foundAsteroids: Asteroid[];
  likedAsteroids: Asteroid[];
}

const initialState: AsteroidsState = {
  foundAsteroids: [],
  likedAsteroids: [],
};

export const asteroidsSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    populateAsteroids: (state, action: PayloadAction<Asteroid[]>) => {
      state.foundAsteroids.push(...action.payload);
    },
    toggleAsteroidLike: (state, action: PayloadAction<string>) => {
      const toggledAsteroid = state.foundAsteroids.find(
        (foundAsteroid) => foundAsteroid.id === action.payload
      ) as Asteroid;
      toggledAsteroid.isLiked = !toggledAsteroid.isLiked;
      if (toggledAsteroid.isLiked) {
        state.likedAsteroids.push(toggledAsteroid);
      } else {
        const likedAsteroidIndex = state.likedAsteroids.findIndex(
          (asteroid) => asteroid.id === action.payload
        );
        state.likedAsteroids.splice(likedAsteroidIndex, 1);
      }
    },
  },
});

export const { populateAsteroids, toggleAsteroidLike } = asteroidsSlice.actions;

export const selectFoundAsteroids = (state: RootState) =>
  state.asteroids.foundAsteroids;
export const selectLikedAsteroids = (state: RootState) =>
  state.asteroids.likedAsteroids;

export default asteroidsSlice.reducer;
