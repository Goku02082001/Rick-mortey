import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Details from "./Details";
const Card = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [timer, setTime] = useState(new Date());
  const limit = 5;
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
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
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = timer.getDate();
  const month = months[timer.getMonth()];
  const year = timer.getFullYear();
  const time = timer.toLocaleTimeString("en-GB");

  return (
    <div>
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
        <div className="Timer">{`${day} ${month}, ${year} | ${time}`}</div>
    </div>
  );
};

export default Card;
