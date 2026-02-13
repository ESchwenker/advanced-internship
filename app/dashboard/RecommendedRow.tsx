import { books } from "@/lib/books"
import SummaryCard from "./SummaryCard"

export default function RecommendedRow() {
  return (
    <section>

      <h2 className="sectionTitle">Recommended For You</h2>
      <p className="sectionSubtitle">We think you’ll like these</p>

      <div className="recommendedRow">
        {books.map(book => (
          <SummaryCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
            time={book.time}
          />
        ))}
      </div>

    </section>
  )
}