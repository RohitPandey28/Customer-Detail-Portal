import React, { useEffect, useState } from "react";
import { usePhotos } from "../../hooks/usePhotos";
import styles from "./photoGrid.module.css";
import Loader from "../Loader";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  customerId: number;
}

const PhotoGrid: React.FC<Props> = ({ customerId }) => {
  const { photos } = usePhotos(customerId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, [customerId]);

  return (
    <div className={styles.photoGridContainer}>
      {isLoading && <Loader />}
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <LazyLoadImage
            src={photo.download_url}
            alt={`PhotoDetail ${index + 1}`}
            effect="blur"
            // wrapperClassName={styles.imageWrapper}
            className={styles.photo}
            placeholderSrc="https://cdn.dribbble.com/users/110792/screenshots/17024372/media/7218f55266fffc61fa39bdf67acf0ae7.png"
          />
          // use below code for normal img tag ***************
          // <img
          //   key={index}
          //   src={photo.download_url}
          //   alt={`PhotoDetail ${index + 1}`}
          //   className={styles.photo}
          //   loading="lazy"
          // />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PhotoGrid);
