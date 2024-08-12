import { useState, useEffect } from 'react';
const Fetch = () => {
  const [todos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('../../data/db.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <>
      {todos.map((todo) => (
      <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );  
};
export default Fetch;