import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 5)));
  }, []);
  return (
  <div>
    <BookCard books={books} headline="Best Seller Books"/>
    </div>
    );
};

export default BestSellerBooks;
// {
//     "bookTitle": "The Most Interesting Person in the Room: A brief guide to understanding the world",
//     "authorName": "Thomas Vernon",
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1601939705i/55573766.jpg",
//     "category": "Nonfiction",
//     "bookDescription": "The origin of the marathon derives from the legendary story of Philippides running from the Battlefields of Marathon to Athens in 490 B.C. This distance was approximately 40 km, however, was changed in 1908 to please a lazy 67-year-old king.In nearly every geography classroom around the world hangs a map called the Mercator Projection. This is the mostly widely distributed, yet inaccurate map in history and could be distorting societal views on the",
//     "bookPDFURL":"https://www.goodreads.com/book/show/55573766-the-most-interesting-person-in-the-room"
// }
