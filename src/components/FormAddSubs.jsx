import { useState } from "react";
import { SingleItem } from "./SingleItem";

export const FormAddSubs = ({
  setType,
  setPrice,
  type,
  price,
  subs,
  setSubs,
  editId,
  setEditId,
  count,spend
}) => {
    
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const servicios = [
    {
      value: " ",
      name: "Elegir",
    },
    {
      value: "netflix",
      name: "Netflix",
    },
    {
      value: "disney-Plus",
      name: "Disney",
    },
    {
      value: "hboMax",
      name: "HBO Max",
    },
    {
      value: "startplus",
      name: "Start Plus",
    },
    {
      value: "spotify",
      name: "spotify",
    },
  ];

  const services = servicios.map((el, index) => {
    return (
      <option key={index} value={el.value}>
        {el.name}
      </option>
    );
  });

  const handleSubs = (e) => {
    e.preventDefault();

    if (price == "" || price < 0 || type == "") {
      setError(true);
      return;
    }

    if(count-spend < Number(price) ){
        setErrorMoney(true)
        return
    }

    setError(false);
    setErrorMoney(false)

    if (editId != "") {
        //para que no vuelva a entrar a esta condición
        setEditId('')

      const newSubs = subs.map((el) => {
        if (el.id == editId) {
          el.type = type;
          el.price = price;
        }
        return el;
      });
      setSubs(newSubs);
    } else {
      const data = {
        id: Date.now(),
        type: type,
        price: price,
      };
      setSubs([...subs, data]);
    }
    setPrice("");
    setType("");
  };

  return (
    <div>
      <div className="add-subscriptions">
        <h3>Agregar subscripciones</h3>
        <form onSubmit={handleSubs}>
          <p>Servicios</p>
          <select onChange={(el) => setType(el.target.value)} value={type}>
            {services}
          </select>
          <p>Cantidad</p>
          <input
            type="number"
            placeholder="$20"
            onChange={(el) => setPrice(el.target.value)}
            value={price}
          />
          {editId != "" ? (
            <input type="submit" value="Guardar" />
          ) : (
            <input type="submit" value="Agregar" />
          )}
        </form>
        <div className="errors">

        {error ? <p>Datos incorrectos</p> : null}
        {errorMoney ? <p>Saldo insuficiente</p> : null}
        </div>
      </div>
    </div>
  );
};
