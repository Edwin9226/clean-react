import { type ChangeEvent, useState } from "react";

export type UncontrolledProps = {
  values: string | null;
  setValues: string | null;
  firstName: string | null;
  lastName: string | null;
};

const Uncontrolled: React.FC<UncontrolledProps> = () => {
  const [values, setValues] = useState(
    `{firstName: 'Carlos', lastName: 'Santana'}`
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValues(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
