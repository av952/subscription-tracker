import {moneyFormat} from './helper.js'
export const SingleItem = ({price,type,id,eliminarItem,editItem}) => {

    const urls=[
        {
            value:'netflix',
            name: 'https://i.postimg.cc/JhN5d365/netflix.png'
        },
        {
            value: 'disney-Plus',
            name: 'https://i.postimg.cc/vHrkf9Mf/disney-Plus.png'
        },
        {
            value: 'hboMax',
            name: 'https://i.postimg.cc/tgMMpNtQ/hboMax.png'
        },
        {
            value: 'startplus',
            name: 'https://i.postimg.cc/kGpQtTGq/starPlus.png'
        },
        {
            value: 'spotify',
            name: 'https://i.postimg.cc/Wz3m3B25/spotify.png'
        }
    ]

    const src =  urls.find(el=>(el.value == type))

    const handleDelete=(e)=>{
        e.preventDefault()
        eliminarItem(id)
    }
    const handleEdit=(e)=>{

        
        e.preventDefault()

        editItem(id)
    }

  return (
    <div className="single-item">
        <img className="img-single" src={src.name} alt="" />
        <h3>Precio: {moneyFormat(Number(price)) }</h3>
        <button onClick={handleDelete}>Borrar</button>
        <button onClick={handleEdit}>Editar</button>
    </div>
  )
}
