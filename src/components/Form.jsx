import { forwardRef } from "react";

const Form = forwardRef(({ label, type, textarea, ...props }, ref) => {
  return (
    <div>
      <h3>{label}</h3>
      {textarea ? (
        <textarea type={type} ref={ref} {...props} />
      ) : (
        <input type={type} ref={ref} {...props} />
      )}
    </div>
  );
});

export default Form;
