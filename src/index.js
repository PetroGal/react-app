import ReactDom from 'react-dom'

//CSS
import './index.css'

//setup vars
// let's refactor these three values into an object
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY436_FMwebp_QL65_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen ',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          quibusdam assumenda beatae consequatur temporibus rem iusto dolores
          dolor illo natus?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}
ReactDom.render(<BookList />, document.getElementById('root'))
