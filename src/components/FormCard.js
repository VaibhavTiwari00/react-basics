const FormCard = () => {
  return (
    <>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="number" name="number" />
        <select name="select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="checkbox" name="check" />
      </form>
    </>
  );
};

export default FormCard;
