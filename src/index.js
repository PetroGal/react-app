import ReactDom from 'react-dom'

//CSS
import './index.css'

//setup vars
// let's refactor these three values into an object

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._SY349_BO1,204,203,200_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        const { img, title, author } = book
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
ReactDom.render(<BookList />, document.getElementById('root'))
