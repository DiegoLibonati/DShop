import React, { useRef, useState } from "react";

import { SubscribeNewsletterProps } from "@src/entities/props";

import { ButtonWhite } from "@src/components/core/Buttons/ButtonWhite/ButtonWhite";

import { lang } from "@src/constants/lang";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/components/composed/Subscribes/SubscribeNewsletter/SubscribeNewsletter.css";

export const SubscribeNewsletter = ({
  title,
  submitLabel,
  language = "en",
  className,
  onSubmit,
}: SubscribeNewsletterProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const rootIds = useRef<string[]>(getIdsByLength(1));

  const handleNativeSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value as string;

    setInputValue(value);
  };

  return (
    <div className={`subscribe-newsletter ${className}`}>
      <h2 className="subscribe-newsletter__title">{title}</h2>

      <form
        className="subscribe-newsletter__form"
        onSubmit={handleNativeSubmit}
      >
        <input
          id="input-subscribe-newsletter"
          name="input-subscribe-newsletter"
          type="text"
          className="subscribe-newsletter__form-input"
          placeholder={lang[language].subscribeNewsletter.placeholder}
          onChange={onInputChange}
          value={inputValue}
        ></input>
        <ButtonWhite
          idRoot={rootIds.current[0]}
          ariaLabel="submit button subscribe newsletter"
          type="submit"
          borderGray={false}
          rounded={true}
          language={language}
          className="subscribe-newsletter__form-submit"
          classNameWrapper="subscribe-newsletter__form-submit-wrapper"
        >
          {submitLabel}
        </ButtonWhite>
      </form>
    </div>
  );
};
