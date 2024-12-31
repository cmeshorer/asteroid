import axios from "axios";
import moment from "moment";
import { pageSize } from "@/constants/asteroids";
import {
  Asteroid,
  BackendAsteroidsData,
  NearEarthObject,
} from "@/models/asteroids";
import { getAverage, shortenValue } from "@/tools/math";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const getEstimatedDiameter = (nearEarthObject: NearEarthObject) => {
  return `${shortenValue(
    getAverage([
      nearEarthObject.estimated_diameter.kilometers.estimated_diameter_min,
      nearEarthObject.estimated_diameter.kilometers.estimated_diameter_max,
    ])
  )} km`;
};

const getNextCloseApproach = (nearEarthObject: NearEarthObject) => {
  return nearEarthObject.close_approach_data.filter((closeAproach) =>
    moment(closeAproach.close_approach_date).isAfter()
  )[0];
};

const asteroidsAdaptor = (backendAsteroidsData: BackendAsteroidsData) => {
  const adaptedAsteroids = backendAsteroidsData.near_earth_objects.map(
    (backendAsteroid) => {
      const estimatedDiameter = getEstimatedDiameter(backendAsteroid);
      const nextCloseApproach = getNextCloseApproach(backendAsteroid);
      return {
        absoluteMagnitude: backendAsteroid.absolute_magnitude_h.toString(),
        designation: backendAsteroid.designation,
        estimatedDiameter,
        firstObservationYear: moment(
          backendAsteroid.orbital_data.first_observation_date
        ).format("YYYY"),
        id: backendAsteroid.id,
        isLiked: false,
        isPotentiallyHazardous:
          backendAsteroid.is_potentially_hazardous_asteroid,
        name: backendAsteroid.name,
        nameLimited: backendAsteroid.name_limited,
        nextCloseApproach: nextCloseApproach
          ? {
              date: moment(nextCloseApproach.close_approach_date).format(
                "DD/MM/YYYY"
              ),
              missDistance: `${shortenValue(
                nextCloseApproach.miss_distance.kilometers
              )} km`,
              relativeVelocity: `${shortenValue(
                nextCloseApproach.relative_velocity.kilometers_per_hour
              )} km/h`,
            }
          : undefined,
      };
    }
  );
  return adaptedAsteroids as Asteroid[];
};

export const asteroidsService = {
  browse: async (page: number) => {
    const api = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${pageSize}&api_key=${apiKey}`;
    const response = await axios.get(api);
    const backendAsteroidsData = response.data as BackendAsteroidsData;
    const asteroids = asteroidsAdaptor(backendAsteroidsData);
    return asteroids;
  },
};
