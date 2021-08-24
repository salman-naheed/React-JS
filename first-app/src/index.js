import React from 'react';
import ReactDOM from 'react-dom';
import logo192 from './logo192.png'
function BookList() {
  return (
    <section>
      <Book/>
    </section>
  )
}

const Book = () => {
  return(
    <article>
      <Image/>,
      <Title/>
    </article>
  )
}

const Image =()=> {
  return(
    <img src={logo192}/>
  )
}

const Title = () => {
  return <h2>Not to give.</h2>
}
ReactDOM.render(<BookList />, document.getElementById("root"));