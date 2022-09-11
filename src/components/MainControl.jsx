import { useState } from "react";
import { Balance } from "./Balance";
import { DisplayItems } from "./DisplayItems";
import { FormAddSubs } from "./FormAddSubs";

export const MainControl = ({ count }) => {
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [subs, setSubs] = useState([]);
  const [editId, setEditId] = useState("");
  const [spend, setSpend] = useState(0);

  const eliminarItem = (id) => {
    const newList = subs.filter((el) => el.id != id);
    setSubs(newList);
  };

  const editItem = (id) => {
    setEditId(id);

    subs.map((el) => {
      if (el.id == id) {
        setPrice(el.price);
        setType(el.type);
      }
    });
  };

  return (
    <>
      <div className="main-control">
        <Balance
          count={count}
          subs={subs}
          price={price}
          setPrice={setPrice}
          setSpend={setSpend}
          spend={spend}
        />
        <FormAddSubs
          setPrice={setPrice}
          setType={setType}
          type={type}
          price={price}
          subs={subs}
          setSubs={setSubs}
          editId={editId}
          setEditId={setEditId}
          count={count}
          spend={spend}
        />
      </div>

      <div>
        <DisplayItems
          subs={subs}
          eliminarItem={eliminarItem}
          editItem={editItem}
        />
      </div>
    </>
  );
};
