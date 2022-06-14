import { useFormik } from 'formik';
import TextField from '@commercetools-uikit/text-field';
import TextInput from '@commercetools-uikit/text-input';
import {
  FormModalPage,
  useModalState,
} from '@commercetools-frontend/application-components';

const AccountPage = () => {
  const formModalState = useModalState();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (formikValues) => {
      if (TextInput.isEmpty(formikValues.email)) {
        return { email: { missing: true } };
      }
      return {};
    },
    onSubmit: async (formikValues) => {
      alert(`email: ${formikValues.email}`);
      // Do something async
    },
  });

  return (
    <FormModalPage
      title="Manage your account"
      isOpen={formModalState.isModalOpen}
      onClose={formModalState.closeModal}
      isPrimaryButtonDisabled={formik.isSubmitting}
      onSecondaryButtonClick={formik.handleReset}
      onPrimaryButtonClick={formik.handleSubmit}
    >
      <TextField
        name="email"
        title="Email"
        isRequired={true}
        value={formik.values.email}
        errors={formik.errors.email}
        touched={formik.touched.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </FormModalPage>
  );
};
