
# Forms with Formik & Yup

Creacion de formularios responsivo con diseño Mobile First, 
basado en componentes con Formik y validaciones con Yup


## Tech Stack

**Client:** React, Next Js, Sass, Formik, Yup, Axios



## Screenshots

Vista Mobile
![Mobile](https://github.com/Lema1/Forms-with-Formik-Yup/blob/main/public/screenshot/mobile.png?raw=true)

Vista Desktop
![Desktop](https://github.com/Lema1/Forms-with-Formik-Yup/blob/main/public/screenshot/desktop.png?raw=true)
![Desktop-1](https://github.com/Lema1/Forms-with-Formik-Yup/blob/main/public/screenshot/desktop-1.png?raw=true)
## Installation

Instalar proyecto con npm

En primer lugar, ejecute el servidor de desarrollo:
```bash
npm run dev
# or
yarn dev
```
    
## Usage/Examples

Validation Expample

```javascript
const validate = Yup.object({
    title: Yup.string()
      .min(3, "* Minimo 3 carácteres")
      .max(100, "* No puede superar los 100 carácteres")
      .required("* Requerido"),
    body: Yup.string()
      .min(3, "* Minimo 3 carácteres")
      .max(254, "* No puede superar los 254 carácteres")
      .required("* Requerido"),
  });
```

Submit Expample
```javascript
const handleOnSubmit = async (values, setSubmitting) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((response) => {
        if (response.status === 201) {
          console.log("Agregado", response.data);
          setSubmitting(false);
        }
      })
      .catch((err) => {
        console.log(err.response.status, err.response.statusText);
        setSubmitting(true);
      });
  };
```

Form Expample
```javascript
import { InputText, InputNumber, InputTextArea } from "../components/InputForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function App() {
   <Formik
    initialValues={{
        title: "",
        body: "",
        userId: "",
    }}
    validationSchema={validate}
    onSubmit={(values, { setSubmitting }) => handleOnSubmit(values, setSubmitting)}
    >
    {({ handleSubmit, isSubmitting, resetForm, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
        <div className="form__container">
            <InputText name="title" title="Titulo" />
            <InputTextArea name="body" title="Cuerpo" setFieldValue={setFieldValue}/>
            <InputNumber name="userId" title="ID Usuario" />
        </div>
        <div className="form__buttons">
            <button type="reset" className="form__buttons-reset" onClick={resetForm}>Limpiar</button>
            <button type="submit" className="form__buttons-submit" disabled={isSubmitting}>Agregar</button>
        </div>
        </Form>
    )}
    </Formik>
}
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#ff8000](https://via.placeholder.com/10/ff8000?text=+) #ff8000 |
| Secondary Color | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |
| Third Color | ![#000](https://via.placeholder.com/10/000?text=+) #000 |
| Primary Ligth Color | ![#ffa449](https://via.placeholder.com/10/ffa449?text=+) #ffa449 |
| Grey Color | ![#dbdbdb](https://via.placeholder.com/10/dbdbdb?text=+) #dbdbdb |
| Red Color | ![#ff0000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |
