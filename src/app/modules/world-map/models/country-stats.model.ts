export interface CountryStats {
  count: number;
  views: number;
  iso_code: string;
  total_cases: number | null;
  total_deaths: number | null;
  total_vaccinations: null | string;
  population: null | string;
  population_density: number | null;
}
