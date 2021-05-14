// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: "https://covid-19-coronavirus-statistics.p.rapidapi.com",
  RequestTypeCountry: "/v1/stats?country=",
  RequestTypeTotal: "/v1/total?country=",
  Authorization: {
    "key": "3e0be4e905mshc2bc95d6c269467p179218jsn7d5ff9f0f0b6",
    "host": "covid-19-coronavirus-statistics.p.rapidapi.com"
  },

};
