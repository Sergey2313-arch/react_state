import './App.css';
import Hello from './Hello';
import Form from './Form';
import Range from './Range';
import Posts from './Posts';

function App() {
  const posts = [
    { title: 'C++ Base', content: 'Основы программирования на языке C++' },
    { title: 'C++ OOP', content: 'Объектно-ориентированное программирование на языке C++' },
    { title: 'Windows via C++', content: 'Разработка настольных Windows-приложений на языке C++' },
  ];

  return (
    <div className="App">
      <Hello />
      <hr />

      <Form />
      <hr />

      <Range />
      <hr />

      <Posts posts={posts} />
    </div>
  );
}

export default App;
