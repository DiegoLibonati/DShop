import React, { useRef, useEffect } from "react";

import {
  mountComponent,
  MountOptions,
  unMountComponent,
} from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { FooterWithSubscribeNewsletterProps } from "shared_react/SharedReactProps";

const FooterWithSubscribeNewsletter = ({
  idRoot,
  title,
  description,
  facebook,
  instagram,
  twitter,
  language,
  children,
  className,
  classNameWrapper,
  onSubmitSubscribe,
}: FooterWithSubscribeNewsletterProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.FooterWithSubscribeNewsletter,
      props: {
        idRoot: idRoot,
        title: title,
        description: description,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        language: language,
        className: className,
        children: children,
        onSubmitSubscribe: onSubmitSubscribe,
      },
    };

    mountComponent(ref.current!, options);
  };

  const onDestroy = () => {
    unMountComponent(idRoot);
  };

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default FooterWithSubscribeNewsletter;
