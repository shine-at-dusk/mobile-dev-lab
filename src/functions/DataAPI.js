import { apiConfig } from './../config';

class DataAPI {
  constructor(config) {
    this.config = config;
  }

  async addStation(name, latitude, longitude, callback) {
    return fetch(this.config.POST_STATION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        external_id: name,
        name: name,
        latitude: latitude,
        longitude: longitude,
      })
    })
      .then((response) => response.json())
      .then(callback);
  }

  async deleteStation() { }

  async getAllStations(callback) {
    return fetch(this.config.GET_STATIONS_URL)
      .then((response) => response.json())
      .then(callback);
  };

  async updateStation() { }
}

export default new DataAPI(apiConfig);
