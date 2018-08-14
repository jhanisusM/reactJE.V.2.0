import axios from "axios";

export default {
  // Gets all horses
  getHorses: function() {
    return axios.get("/api/horses");
  },
  // Gets the horse with the given id
  getHorse: function(id) {
    return axios.get("/api/horses/" + id);
  },
  getHorseByName: function(name) {
    return axios.get("/api/horses/name/" + name);
  },
  getHorseBySire: function(sire) {
    return axios.get("/api/horses/sire/" + sire);
  },
  getHorseByMare: function(mare) {
    return axios.get("/api/horses/mare/" + mare);
  },
  getHorseByGender: function(gender) {
    return axios.get("/api/horses/gender/" + gender);
  },

  // Deletes the Horse  with the given id
  deleteHorse: function(id) {
    return axios.delete("/api/horses/" + id);
  },
  // Saves a horse to the database
  saveHorse: function(horseData) {
    return axios.post("/api/horses", horseData);
  }

};



