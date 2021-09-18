import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterPizzas } from "../actions/pizzaAction";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [categoryKey, setCategoryKey] = useState("all");
  return (
    <div className="p-3 mb-5 rounded shadow-lg row justify-content-center">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Pizza"
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
        />
      </div>
      <div className="col-md-3">
        <select
          name=""
          id=""
          className="form-control"
          onChange={(e) => setCategoryKey(e.target.value)}
          value={categoryKey}
        >
          <option value="all">All</option>
          <option value="veg">Vegitable</option>
          <option value="nonveg">Non Vegitable</option>
        </select>
      </div>
      <div className="col-md-3">
        <button
          className="btn form-control"
          onClick={() => dispatch(getFilterPizzas(searchKey, categoryKey))}
        >
          FILTER
        </button>
      </div>
    </div>
  );
};

export default Filter;
