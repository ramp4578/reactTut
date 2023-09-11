import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    title: 'Chanakyas Chant, Bharat Series 2 ',
    author: 'Jordan Moore',
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        console.log(book)
        const { img, title, author } = book

        return <Book img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book = ({ img, author, title, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      {children}
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
