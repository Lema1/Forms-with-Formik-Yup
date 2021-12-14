import Head from "next/head";
import { Fragment } from "react";
import { InputText, InputEmail, InputNumber } from "../components/InputForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Index = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(3, "* Minimo 3 carácteres")
      .max(100, "* No puede superar los 100 carácteres")
      .required("* Requerido"),
    username: Yup.string()
      .min(5, "* Minimo 5 carácteres")
      .max(70, "* No puede superar los 70 carácteres")
      .required("* Requerido"),
    email: Yup.string()
      .email("* Email invalido")
      .min(10, "* Minimo 10 carácteres")
      .max(254, "* No puede superar los 254 carácteres")
      .required("* Requerido"),
    phone: Yup.number()
      .integer()
      .min(999999, "* Minimo 7 numeros")
      .max(999999999, "* No puede superar los 9 numeros")
      .required("* Requerido")
      .typeError("* Debe ser numero"),
    address: Yup.object().shape({
      street: Yup.string()
        .min(4, "* Minimo 4 carácteres")
        .max(80, "* No puede superar los 80 carácteres")
        .required("* Requerido"),
      suite: Yup.string().max(80, "* No puede superar los 80 carácteres"),
      city: Yup.string()
        .min(4, "* Minimo 4 carácteres")
        .max(50, "* No puede superar los 50 carácteres")
        .required("* Requerido"),
      zipcode: Yup.number()
        .integer()
        .max(999999999999, "* Debe ser maxinpo de 12 numeros")
        .notRequired(),
    }),
  });

  const handleOnSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="form">
          <div className="form__title">
            <span>Agregar Usuario</span>
          </div>
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              phone: "",
              address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
              },
            }}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) =>
              handleOnSubmit(values, setSubmitting)
            }
          >
            {({ handleSubmit, isSubmitting, resetForm }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form__container">
                  <InputText name="name" title="Nombre" />
                  <InputText name="username" title="Username" />
                  <InputEmail name="email" title="Email" />
                  <InputNumber name="phone" title="Telefono" />
                </div>
                <div className="form__container">
                  <InputText name="address.street" title="Calle" />
                  <InputText name="address.suite" title="Departamento" />
                  <InputText name="address.city" title="Ciudad" />
                  <InputNumber name="address.zipcode" title="Codigo Postal" />
                </div>
                <div className="form__buttons">
                  <button
                    type="reset"
                    className="form__buttons-reset"
                    onClick={resetForm}
                  >
                    Limpiar
                  </button>
                  <button
                    type="submit"
                    className="form__buttons-submit"
                    disabled={isSubmitting}
                  >
                    Agregar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
