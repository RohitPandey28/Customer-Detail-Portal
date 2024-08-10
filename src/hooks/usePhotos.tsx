import { useState, useEffect } from "react";
import { Photo } from "../types";
import { fetchPhotos } from "../services/api";
import { getRandomNumber } from "../helpers";

export const usePhotos = (customerId: number) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async (id: number) => {
      try {
        const newPhotos = await fetchPhotos(id);
        setPhotos(newPhotos);
      } catch (error) {
        console.error("Failed to fetch photos:", error);
      }
    };

    loadPhotos(customerId);
    const interval = setInterval(() => {
      const randomNo = getRandomNumber();
      loadPhotos(randomNo);
    }, 10000);

    return () => clearInterval(interval);
  }, [customerId]);

  return { photos };
};
