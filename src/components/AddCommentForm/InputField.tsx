import { useField } from "formik";
import { InputFieldProps } from "../../shared/types/PropsTypes";

export const InputField = ({ name, ...props }: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="formInput">
      <input type="text" autoComplete="off" {...field} {...props} />
      {meta.error && meta.touched ? (
        <strong className="error">{meta.error}</strong>
      ) : null}
    </div>
  );
};
