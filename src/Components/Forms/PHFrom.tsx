import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";

const PHForm = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit: SubmitErrorHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
