import React, { useState } from "react";
import "./card.css";
import CardModal from "../Modal/CardModal";

const decodeHtmlEntities = (html) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

const Card = ({ data, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const htmlString = data?.data?.selftext;
  const decodedHtml = decodeHtmlEntities(htmlString);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-header text-end">
          {" "}
          <button className="btn" onClick={handleViewMore}>
            View More
          </button>
        </div>
        <div className="card-body" onClick={handleViewMore}>
          <h5 className="card-title footer-content">{data?.data?.title}</h5>

          {decodedHtml && (
            <div
              className="card-text content"
              dangerouslySetInnerHTML={{ __html: decodedHtml }}
            />
          )}
          {!decodedHtml && (
            <div className="card-text content">
              <br />
              <br />
            </div>
          )}
        </div>
        <div className="card-footer ">
          <div className="row">
            <div className="col-md-10 footer-content">
              <a
                href={data?.data?.url}
                target="_blank"
                rel="noreferrer"
                className="">
                {data?.data?.url}
              </a>
            </div>
            <div className="col-md-2  text-end">
              <span className="">{data?.data?.score}</span>
            </div>
          </div>
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={decodedHtml}
        title={data?.data?.title}
      />
    </>
  );
};

export default Card;
