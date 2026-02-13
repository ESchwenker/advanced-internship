import Image from "next/image";
import { FaClock, FaStar } from "react-icons/fa";

interface Props {
  title: string;
  author: string;
  description: string;
  image: string;
  time: string;
  rating: string;
  bgColor: string;
}

export default function BookCarouselCard({
  title,
  author,
  description,
  image,
  time,
  rating,
  bgColor,
}: Props) {
  return (
    <div className="carouselCard">
      <div className="carouselCard__inner">
        <div className="carouselCard__coverWrapper">
          <div className="carouselCard__image">
            <Image src={image} alt={title} width={170} height={170} />
          </div>
        </div>
        <div className="carouselCard__content">
          <h3 className="carouselCard__title">{title}</h3>

          <p className="carouselCard__author">{author}</p>

          <p className="carouselCard__sub">{description}</p>

          <div className="carouselCard__meta">
            <span>⏱ {time}</span>
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
