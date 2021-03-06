import React, { useEffect, useState } from "react";
// import About from "../components/About/About";
import { Card } from "../components/Cards/Card";
import { Header } from "../components/Header/Header";
import Loading from "../components/Loading/Loading";

export const Home = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [recipeCopy, setRecipeCopy] = useState([]);
  const [loading, setLoading] = useState(true);

  const sortRecipeList = (id) => {
    let sortedList;
    let newRecipeArr;
    if (id === "price") {
      sortedList = recipeList.sort((a, b) => (a.price > b.price ? 1 : -1));
      setRecipeList([...sortedList]);
    } else if (id === "rating") {
      sortedList = recipeList.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      setRecipeList([...sortedList]);
    } else if (id === "veg") {
      newRecipeArr = recipeCopy.filter((item) => item.isVeg);
      setRecipeList(newRecipeArr);
    } else if (id === "nonVeg") {
      newRecipeArr = recipeCopy.filter((item) => !item.isVeg);
      setRecipeList(newRecipeArr);
    } else if (id === "all") {
      setRecipeList(recipeCopy);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").then(
      (response) =>
        response
          .json()
          .then((data) => {
            setRecipeList(data);
            setRecipeCopy(data);
            setLoading(false);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  if (loading) {
    return (
      <main>
        <Header />

        <Loading />
      </main>
    );
  }

  return (
    <div>
      <Header />
      {/* <About /> */}
      <div className="btnContainer">
        <div className="btnWrapper">
          <button onClick={() => sortRecipeList("all")}>All</button>
          <button onClick={() => sortRecipeList("price")}>price</button>
          <button onClick={() => sortRecipeList("rating")}>rating</button>
          <button onClick={() => sortRecipeList("veg")}>veg</button>
          <button onClick={() => sortRecipeList("nonVeg")}>non veg</button>
        </div>
      </div>
      <div className="cardContainer">
        {recipeList.map((recipe) => {
          return <Card key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
};
