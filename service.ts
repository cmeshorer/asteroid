import axios from "axios";
import moment from "moment";
import { Asteroids, CloseApproach, Orbital } from "./model";
import { getAverage, shortenValue } from "./tools/math";

export interface NearEarthObject {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproach[];
  orbital_data: Orbital;
  is_sentry_object: boolean;
}

export interface BackendAsteroidsData {
  links: {
    next?: string;
    prev?: string;
    self: string;
  };
  page: {
    size: number;
    total_elements: number;
    total_pages: number;
    number: number;
  };
  near_earth_objects: NearEarthObject[];
}

export const asteroidsAdaptor = (
  backendAsteroidsData: BackendAsteroidsData
) => {
  const adaptedAsteroids = backendAsteroidsData.near_earth_objects.map(
    (backendAsteroid) => {
      const estimatedDiameter = `${shortenValue(
        getAverage([
          backendAsteroid.estimated_diameter.kilometers.estimated_diameter_min,
          backendAsteroid.estimated_diameter.kilometers.estimated_diameter_max,
        ])
      )} km`;
      const backendNextCloseApproach =
        backendAsteroid.close_approach_data.filter((closeAproach) =>
          moment(closeAproach.close_approach_date).isAfter()
        )[0];

      return {
        absoluteMagnitude: backendAsteroid.absolute_magnitude_h.toString(),
        designation: backendAsteroid.designation,
        estimatedDiameter,
        firstObservationYear: moment(
          backendAsteroid.orbital_data.first_observation_date
        ).format("YYYY"),
        isLiked: false,
        isPotentiallyHazardous:
          backendAsteroid.is_potentially_hazardous_asteroid,
        name: backendAsteroid.name,
        nameLimited: backendAsteroid.name_limited,
        nextCloseApproach: backendNextCloseApproach
          ? {
              date: moment(backendNextCloseApproach.close_approach_date).format(
                "DD/MM/YYYY"
              ),
              missDistance: `${shortenValue(
                backendNextCloseApproach.miss_distance.kilometers
              )} km`,
              relativeVelocity: `${shortenValue(
                backendNextCloseApproach.relative_velocity.kilometers_per_hour
              )} km/h`,
            }
          : undefined,
      };
    }
  );
  return adaptedAsteroids as Asteroids;
};

const apiKey = "DEMO_KEY";

export const service = {
  asteroids: {
    browse: async (page: number) => {
      const size = 20;
      const api = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${size}&api_key=${apiKey}`;
      const response = await axios.get(api);
      const backendAsteroidsData = response.data as BackendAsteroidsData;
      const asteroids = asteroidsAdaptor(backendAsteroidsData);
      return asteroids;
    },
  },
};
