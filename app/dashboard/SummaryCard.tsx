import Image from "next/image"

interface Props {
  title: string
  author: string
  image: string
  category: string
  time: string
}

export default function SummaryCard({
  title,
  author,
  image,
  category,
  time
}: Props) {
  return (
    <div className="summaryCard">

      <div className="summaryCard__image">
        <Image
          src={image}
          alt={title}
          width={160}
          height={220}
        />
      </div>

      <div className="summaryCard__info">
        <h3>{title}</h3>
        <p className="summaryCard__author">{author}</p>

        <div className="summaryCard__meta">
          <span>{category}</span>
          <span>{time}</span>
        </div>
      </div>

    </div>
  )
}