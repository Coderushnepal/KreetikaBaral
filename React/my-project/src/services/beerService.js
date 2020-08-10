import http from "../utils/http";
import { dummyBeersData } from "../constants/dummyData";

export const fetchBeers = async () => {
  //call async API
  const { data } = await http.get("/beers");

  console.log(data);

  return data;
};

export const fetchBeerById = async (id) => {
  //call single beer async API
  return dummyBeersData[id - 1];
};


//1:47