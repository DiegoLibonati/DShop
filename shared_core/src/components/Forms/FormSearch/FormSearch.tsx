import React, { useState } from "react";

import { FormSearchProps } from "@src/entities/props";

import { SvgSearch } from "@src/components/Svgs/SvgSearch/SvgSearch";

import "@src/components/Forms/FormSearch/FormSearch.css";

export const FormSearch = ({
  placeholder,
  className,
  onSubmit,
}: FormSearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit(inputValue);
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  return (
    <form className={`form-search ${className}`} onSubmit={handleSubmitForm}>
      <button
        type="submit"
        aria-label="form search submit"
        className="form-search__btn"
      >
        <SvgSearch className="form-search__btn-icon"></SvgSearch>
      </button>
      <input
        id="form-search-input"
        name="form-search-input"
        value={inputValue}
        placeholder={placeholder}
        className="form-search__input"
        onChange={onChangeInput}
      ></input>
    </form>
  );
};
