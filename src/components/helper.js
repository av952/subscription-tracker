/**Para dar estilo a la moneda */

export const moneyFormat = (amout)=>{
    return amout.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    })
}