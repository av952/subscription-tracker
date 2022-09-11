import { SingleItem } from "./SingleItem";

export const DisplayItems = ({ subs, eliminarItem,editItem }) => {
  return (
    <>
      {subs.map((el) => (
        <SingleItem key={el.id} id={el.id} price={el.price} type={el.type} eliminarItem={eliminarItem} editItem={editItem} />
      ))}
    </>
  );
};
