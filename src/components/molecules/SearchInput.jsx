import React from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import _ from "lodash";

export const SearchInput = ({ handleSearch, setLoading }) => {
  const handleOnChange = (e) => {
    /* ; */
    debounceHandle(e.target.value);
  };

  const debounceHandle = _.debounce(handleSearch, 700);

  return (
    <>
      <InputGroup className="mb-3" onChange={handleOnChange}>
        <DropdownButton variant="outline-secondary" title="Buscar por..." id="input-group-dropdown-1">
          <Dropdown.Item href="#">Personaje</Dropdown.Item>
          <Dropdown.Item href="#">Ubicación</Dropdown.Item>
          <Dropdown.Item href="#">Episodios</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label="Text input with dropdown button" />
      </InputGroup>
    </>
  );
};
