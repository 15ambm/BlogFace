
const content = [
  'This is a note',
  'Another note',
  'A third note',
  'random text'
]

const List = (props) => {

  return (
    <div>
      {content.map(item => <div> - {item} </div>)}
    </div>
  )

}

const App = () => {

  return (
    <div className="App">
        <p>
          Welcome to the BLOG
        </p>
        <List></List>
    </div>
  );
}

export default App;
