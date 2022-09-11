import { useEffect, useState } from "react";
import { moneyFormat } from "./helper.js";

export const Balance = ({ count, subs,setSpend,spend}) => {

  const updateBalance = () => {
      const spended = subs.reduce((total, item) => Number(item.price) + total, 0); //total =acumulado item=valor actual
      setSpend(spended)

    }

  useEffect(()=>{
    updateBalance()
  },[subs])

  return (
    <div>
      <div className="balance">
        <h3>Presupuesto: {moneyFormat(Number(count))}</h3>
        <h3>Disponible: {moneyFormat(Number(count - spend))}</h3>
        <h3>Gastado: {moneyFormat(Number(spend))}</h3>
      </div>
    </div>
  );
};
