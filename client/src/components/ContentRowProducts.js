import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){
    const [cards,setCards] = useState([]);

    useEffect(() => {
        async function getcards(){
            try {
                const response1 = await fetch('http://localhost:4000/api/products');
                const response2 = await fetch('http://localhost:4000/api/user');
                const products = await response1.json();
                const users = await response2.json();
                const cards = [
                    {color: "primary", titulo: "Total Productos", valor: products.count, icono: "fas fa-truck"},
                    {color: "success", titulo: "Total Usuarios", valor: users.count, icono: "fas fa-user"},
                    {color: "warning", titulo: "Total Categorias", valor: products.categories.length, icono: "fas fa-award"},
                ];
                setCards(cards);
            } catch (error) {
                console.error(error);
            }
        }
        getcards();
    },[]);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cards.map((producto,index)=>{
                    return <SmallCard  {...producto} key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;