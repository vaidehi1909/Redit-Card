import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";

const CardLayout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then(function (response) {
        setData(response.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="row m-3 d-flex justify-content-center">
        {data?.children?.map((cardContent, index) => {
          return (
            <div className="col-md-5 p-3">
              <Card data={cardContent} loading={loading} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardLayout;
