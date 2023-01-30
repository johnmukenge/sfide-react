import Button from "./button";
const Item = ({ value, state, deleteAction }) => {
  const deleteItem = () => {
    deleteAction(value);
  };
  return (
    <>
      <div>
        <span style={{
          color: state === 1 ? 'salmon' : 'black',
          fontWeight: state === 1 ? 'bold' : 'normal',
          padding: '5px',
          margin: '5px'
        }}>{value}</span>
        <Button caption="Delete" action={deleteItem} />
      </div>
    </>
  );
};

export default Item;