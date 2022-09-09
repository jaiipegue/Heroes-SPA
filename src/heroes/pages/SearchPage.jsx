import React from "react";
import queryString from "query-string";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";

import { HeroCard } from "../components";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const showSearch = q.length !== 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <div className="col-7">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit} aria-label="form">
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                onChange={onInputChange}
                value={searchText}
              />
              <button className="btn btn-outline-primary mt-1 ">Search</button>
            </form>
          </div>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          {/* <hr />
          {q === "" ? (
            <div className="alert alert-primary"> Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "none" : "" }}
          >
            Search a hero
          </div>

          <div
            aria-label="alert-danger"
            className="alert alert-danger "
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
