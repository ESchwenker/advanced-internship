import Image from "next/image";
import Link from "next/link"

interface Props {
  id: string
  title: string;
  author: string;
  description: string;
  image: string;
  time: string;
  rating: string;
  subscriptionRequired: boolean;
}

export default function BookCarouselCard({
  id,
  title,
  author,
  description,
  image,
  time,
  rating,
  subscriptionRequired,
}: Props) {
  return (
    <Link href={`/book/${id}`}>
        <div className="carouselCard">
        <div className="carouselCard__inner">
            <div className="carouselCard__coverWrapper">
                  {subscriptionRequired && (
                    <div className="premium-pill">Premium</div>
                    )}
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
    </Link>
  );
}
