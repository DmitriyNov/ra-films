import "./App.css"
import  Stars from "./Components/Stars"

function App() {

  const counter: any[] = [1, 2, 3, 4, 5, "5", 6]; //Можно здесь задати тип number[], но, мне кажется, что это не честно)

  return (
    <>
      {counter.map((count, i) => (
        <Stars key={i} count={count}/>
      ))}
    </>
  )
}

export default App
