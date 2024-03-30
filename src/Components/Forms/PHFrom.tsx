import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: {
  children: React.ReactNode;
  onSubmit: SubmitErrorHandler<FieldValues>;
  resolver: any;
  defaultValues: Record<string,any>
}) => {
  const fromConfig: any = {};

  if (resolver) {
    fromConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(fromConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitErrorHandler<FieldValues> = (data) => {
    //console.log(data);
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
