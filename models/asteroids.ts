interface Orbital {
  orbit_id: string;
  orbit_determination_date: string;
  first_observation_date: string;
  last_observation_date: string;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: string;
  orbit_class: {
    orbit_class_type: string;
    orbit_class_description: string;
    orbit_class_range: string;
  };
}

interface CloseApproach {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
  };
  miss_distance: {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
  };
  orbiting_body: string;
}

export interface NearEarthObject {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited?: string;
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

export interface Asteroid {
  absoluteMagnitude: string;
  designation: string;
  estimatedDiameter: string;
  firstObservationYear: string;
  id: string;
  isLiked: boolean;
  isPotentiallyHazardous: boolean;
  name: string;
  nameLimited: string | undefined;
  nextCloseApproach?: {
    date: string;
    missDistance: string;
    relativeVelocity: string;
  };
}
