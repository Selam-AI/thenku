import React, { useState } from "react";

function Glance() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const Card = ({ title, text, imgSrc }) => (
    <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
      <figure className="avatar mask mask-squircle">
        <img
          src={imgSrc}
          alt={title}
          className="h-16 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );

  return (
    <details className="dropdown">
      <summary onClick={handleChange} className="btn mt-1 skeleton">
        {isChecked ? "Direct Chat" : "At A Glance"}
      </summary>
      <div className="menu dropdown-content bg-base-200 p-3 pt-2 md:p-8 md:pt-2 shadow w-full">
        {/* At A Glance Section */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 md:gap-6 overflow-x-auto">
            <Card
              title="Shoes!"
              text="If a dog chews shoes whose shoes does he choose?"
              imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            />
            <Card
              title="Shoes!"
              text="If a dog chews shoes whose shoes does he choose?"
              imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            />
            <Card
              title="Shoes!"
              text="If a dog chews shoes whose shoes does he choose?"
              imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            />
          </div>
        </div>
      </div>
    </details>
  );
}

export default Glance;
