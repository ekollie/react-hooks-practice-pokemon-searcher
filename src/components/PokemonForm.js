import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({
  handleFormInput,
  handleFormSubmit,
  form,
  handleSort,
  handleAscend,
  ascendSort,
}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...");
          handleFormSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleFormInput}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={form.name}
          />
          <Form.Input
            onChange={handleFormInput}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={form.hp}
          />
          <Form.Input
            onChange={handleFormInput}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={form.frontUrl}
          />
          <Form.Input
            onChange={handleFormInput}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      <h3>Sort by:</h3>
      <button onClick={handleSort} id="id">
        id
      </button>
      <button onClick={handleSort} id="name">
        name
      </button>
      <button onClick={handleSort} id="hp">
        hp
      </button>
      <button onClick={handleAscend}>{ascendSort ? "^" : "v"}</button>
    </div>
  );
}

export default PokemonForm;
