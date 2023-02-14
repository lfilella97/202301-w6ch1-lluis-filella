const Form = (): JSX.Element => {
  return (
    <form className="form" autoComplete="off" noValidate>
      <label aria-label="Task">
        Task: <input type="text" />
      </label>
      <button type="submit">create</button>
    </form>
  );
};

export default Form;
