import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
const Card = () => {
    const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 5;
  const randomGenrator=()=>{
    const randomId=Math.floor(Math.random()*826)+1
    navigate(`/character/${randomId}`)
  }
  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const result = await res.json();
        setData(result.results);
        console.log("This is data", data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, [page]);

  return (
    <div>
        <button onClick={randomGenrator}>Random-Click</button>
      <div className="Card-Container">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt="image" />
              <div className="name">Name:{item.name}</div>
              <div>Species:{item.species}</div>
              <div>Status:{item.status}</div>
              <Link to={`/character/${item.id}`} target="_blank">
                View more
              </Link>
            </div>
          );
        })}
      </div>
      <div id="button">
        <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
        <Timer/>
    </div>
  );
};

export default Card;
