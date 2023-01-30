
const Button = ({ caption, action }) => {
  return (
    <>
      <button type="button" onClick={action}>{caption}</button>
    </>
  );
};

export default Button;