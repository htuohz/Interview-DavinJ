import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEmojies } from "./actions";

const Emojies = () => {
  // useSelector is used to query state from redux
  const { emojies, loading, err } = useSelector((state) => {
    const {
      emojies: { emojies, loading, err },
    } = state;
    return {
      emojies,
      loading,
      err,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmojies());
  }, []);

  if (loading) return <h1>...loading emojies</h1>;

  return (
    <h1>
      Emojies1{" "}
      <ul>
        {" "}
        {emojies.map((item) => {
          return (
            <li>
              <img src={item} />
            </li>
          );
        })}
      </ul>
    </h1>
  );
};

export default Emojies;
