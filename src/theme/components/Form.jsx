import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';

export const Form = () => {
  return function Formik() {
    function validateName(value) {
      let error;
      if (!value) {
        error = 'Name is required';
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱";
      }
      return error;
    }

    return (
      <Formik
        initialValues={{ detail: {} }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
        }}
      >
        {props => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Searchbar</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    );
  };
};
