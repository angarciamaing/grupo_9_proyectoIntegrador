import React, { useState, useEffect } from 'react';
import Genre  from './Genre';

let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]

function GenresInDb(){
    const [genres,setGenres] = useState([]);

    useEffect(() => {
        async function getGenres(){
            try {
                const response = await fetch('http://localhost:4000/api/products')
                const genres = await response.json();

                setGenres(genres.categories)
            } catch (error) {
                console.error(error);
            }
        }

        getGenres();
    },[]);

    return(
        <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Categorias base de datos</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        genres.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
    )
}


// class GenresInDb extends Component{

//     constructor(){
//         super()
//         this.state = {
//             genreList : []
//         }
//     }

//     async componentDidMount(){
//        const response = await fetch('/api/products/');

//        const genres = await response.json();

//        this.setState({
//            genreList: genres.data
//        })
//     }
//     render(){
//         return (
//             <React.Fragment>
//                     {/*<!-- Categories in DB -->*/}
//                     <div className="col-lg-6 mb-4">						
//                         <div className="card shadow mb-4">
//                             <div className="card-header py-3">
//                                 <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row">
//                                     {
//                                         genres.map((genre,index)=>{
//                                             return  <Genre  {...genre}  key={index} />
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
               
//             </React.Fragment>
//         )
//     };

// }
export default GenresInDb;