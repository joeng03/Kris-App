//CONSTANTS

export const AMADEUS_AUTH_URL =
  "https://test.api.amadeus.com/v1/security/oauth2/token";

export const AMAEDEUS_BASE_URL =
  "https://test.api.amadeus.com/v1/reference-data/";
export const HEADERS = {
  "Content-Type": "application/x-www-form-urlencoded",
};
export const CREDENTIALS =
  "grant_type=client_credentials&client_id=rkUIJ7o2Su15MUEm71ZUVxVxGTHhRcM2&client_secret=Oa8G1fI6h1DwHGoE";

// Util functions

export function formatAsPercent(num) {
  return `${parseFloat(num * 100).toFixed(2)}%`;
}
