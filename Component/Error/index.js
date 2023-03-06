import React from "react";

export const ErrorMessage = ({ error, messages }) => {
  if (!error) return null;
  return error && <span className="error-msg">{messages[error.type]}</span>;
};