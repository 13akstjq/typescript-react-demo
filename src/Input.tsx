import React from "react";

interface IInputProp {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface IFormProp {
  onSubmit: (e: React.FormEvent) => void;
}

export const Input: React.FunctionComponent<IInputProp> = ({
  value,
  onChange
}) => <input value={value} onChange={onChange} type="text" />;

export const Form: React.FunctionComponent<IFormProp> = ({
  children,
  onSubmit
}) => <form onSubmit={onSubmit}>{children}</form>;
