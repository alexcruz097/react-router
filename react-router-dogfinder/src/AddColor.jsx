import React from "react";

const AddColor = (props) => {
  console.log(props.colors);
  return (
    <>
      <div className="add-color-html">
        <div className="add-color-container">
          <label htmlFor="color">Color Name</label>
          <input type="text" id="color" />
          <button>Add Color</button>
        </div>
      </div>
    </>
  );
};

export default AddColor;
