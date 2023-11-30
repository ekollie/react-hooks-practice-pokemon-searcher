import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container, FormInput } from "semantic-ui-react";

function PokemonPage({ url }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [sortProp, setSortProp] = useState("id");
  const [ascendSort, setAscendSort] = useState(true);

  const formOutline = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  };
  const [form, setForm] = useState(formOutline);

  const handleSort = (e) => {
    setSortProp(e.target.id);
  };
  const handleAscend = () => {
    ascendSort ? setAscendSort((prev) => !prev) : setAscendSort(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        hp: form.hp,
        sprites: {
          front: form.frontUrl,
          back: form.backUrl,
        },
      }),
    })
      .then((res) => res.json())
      .then((newPokemon) => {
        setPokemonList((prev) => [newPokemon, ...prev]);
      });
    setForm(formOutline);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((pokemon) => setPokemonList(pokemon));
  }, []);

  const modifiedPokemonList = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortProp] < b[sortProp]) {
        return ascendSort ? -1 : 1;
      }
      if (a[sortProp] > b[sortProp]) {
        return ascendSort ? 1 : -1;
      }
      return 0;
    });

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        handleFormInput={handleFormInput}
        handleFormSubmit={handleFormSubmit}
        form={form}
        handleSort={handleSort}
        handleAscend={handleAscend}
        ascendSort={ascendSort}
      />
      <br />
      <Search handleSearch={handleSearch} search={search} />
      <br />
      <PokemonCollection
        pokemonList={pokemonList}
        search={search}
        modifiedPokemonList={modifiedPokemonList}
        sortProp={sortProp}
      />
    </Container>
  );
}

export default PokemonPage;
