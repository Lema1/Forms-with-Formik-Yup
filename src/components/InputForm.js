import { useState } from "react";
import { Field, useField, ErrorMessage } from "formik";

export const InputText = (props) => {
  const { title, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <div className="form__input-container">
      <Field
        className={`form__input-text ${
          meta.touched && meta.error && "invalid"
        }`}
        type="text"
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
      <label className="form__input-label">{title}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="form__input-error"
      />
    </div>
  );
};

export const InputEmail = (props) => {
  const { title, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <div className="form__input-container">
      <Field
        className={`form__input-text email ${
          meta.touched && meta.error && "invalid"
        }`}
        type="email"
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
      <label className="form__input-label">{title}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="form__input-error"
      />
    </div>
  );
};

export const InputPassword = (props) => {
  const { title, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <div className="form__input-container">
      <Field
        className={`form__input-text password ${
          meta.touched && meta.error && "invalid"
        }`}
        type="password"
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
      <label className="form__input-label">{title}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="form__input-error"
      />
    </div>
  );
};

export const InputNumber = (props) => {
  const { title, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <div className="form__input-container">
      <Field
        className={`form__input-text number ${
          meta.touched && meta.error && "invalid"
        }`}
        type="number"
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
      <label className="form__input-label">{title}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="form__input-error"
      />
    </div>
  );
};

export const InputTextArea = (props) => {
  const { title, setFieldValue, ...rest } = props;
  const [field, meta] = useField(props);
  const [rows, setRows] = useState(5);
  const [maxRows, setMaxRows] = useState(18);

  const handleChange = (e) => {
    setFieldValue(field.name, e.target.value);

    const previousRows = e.target.rows;
    const currentRows = e.target.scrollHeight / 24;

    if (currentRows === previousRows) e.target.rows = currentRows;
    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  };
  return (
    <div className="form__input-container">
      <Field
        className={`form__input-text textarea ${
          meta.touched && meta.error && "invalid"
        }`}
        component="textarea"
        rows={rows}
        placeholder=" "
        autoComplete="off"
        onChange={(e) => handleChange(e)}
        {...rest}
      />
      <label className="form__input-label">{title}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="form__input-error"
      />
    </div>
  );
};

export const InputSelect = (props) => {
  return <input />;
};
