const FORECAST_API = 'https://eco-charger-api-731507267492.europe-west9.run.app/forecast';
const USE_MOCK = process.env.NODE_ENV === 'development';

export const getForecast = async () => {
  if (USE_MOCK) {
    return import('../mocks/forecast.json');
  }
  return fetch(FORECAST_API).then(res => res.json());
};