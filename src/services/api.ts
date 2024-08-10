import { getRandomNumber } from "../helpers";
import { Customer, Photo } from "../types";

const API_CUSTOMER_BASE_URL = "https://jsonplaceholder.typicode.com/comments";
const API_BASE_PHOTO_URL = "https://picsum.photos/v2/";

export const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await fetch(`${API_CUSTOMER_BASE_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch customers");
  }
  return response.json();
};

export const fetchPhotos = async (customerId: number): Promise<Photo[]> => {
  customerId = customerId > 98 ? getRandomNumber() : customerId;
  const response = await fetch(
    `${API_BASE_PHOTO_URL}list?page=${customerId + 2}&limit=9`,
    {}
  );
  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }
  return response.json();
};
