import React, { useState } from "react";
import { addItems, deleteAll, deleteItem } from "../action";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ fontSize: "3rem", fontWeight: "800" }}
        >
          All Todo List
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="input-group" style={{ width: "20rem" }}>
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="form-control"
              placeholder="Add todo's List..."
              aria-label="Add todo's List"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => dispatch(addItems(inputData), setInputData(""))}
            >
              <i className="fa fa-plus add-btn"></i>
            </button>
          </div>
        </div>

        {list.map((elem) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center m-3"
              key={elem.id}
            >
              <div
                className="border border-primary border-2 rounded p-2 d-flex justify-content-between"
                style={{ width: "20rem" }}
              >
                {elem.data}
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  style={{ fontSize: "0.8em" }}
                  onClick={() => dispatch(deleteItem(elem.id))}
                ></button>
              </div>
            </div>
          );
        })}

        <div className="d-flex justify-content-center align-items-center mt-5">
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => dispatch(deleteAll())}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
