import { useEffect, useState } from "react";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setDogs(data.message);
        setIsLoading(true);
        console.log(dogs);
      });
  }, []);
  if (!isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <div>
      <img src={dogs} alt="A Random Dog" />
    </div>
  );
};
export default App;
