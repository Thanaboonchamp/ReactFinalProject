import axios from "axios";
import React from "react";
import styled from 'styled-components'
import { Table,Image,Badge,Spinner,Button} from "react-bootstrap"
import MouseIcon from '@material-ui/icons/Mouse';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart } from "../redux/actions/cartAction";
import {useSelector,useDispatch} from 'react-redux'


const Product = () => {

    const [product, setProduct] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(null)

    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)
    
    const dispath = useDispatch()


    const getData = async() =>{
        try{
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            //console.log(resp.data)
            setProduct(resp.data.data)
        }catch(error){
            setError(error)
            console.log(error.resp)
        }
        finally{
            setLoading(false)
        }
    }

    React.useEffect(()=>{
        getData()
    },[])
    if(loading === true){
        return(
            <div className="text-center mt-5">
                <Spinner animation="border" variant="danger" />
            </div>
            
        )
    }
    if(error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, plese try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }
    const addCart = (p) => {
        const product = {
            id:p.id,
            name:p.title,
            price:p.view, //สมมติให้วิว คือราคา
            qty : 1
        }

        //call action
        dispath(addToCart(product,cart))
    }

  return (
    <ProductStyled>
          <Table striped bordered responsive="lg">
            <thead>
              <tr>
                <th>ID </th>
                <th>Course Title </th>
                <th>Course Detail </th>
                <th>Created Date </th>
                <th>View </th>
                <th>Picture </th>
                <th>Detail </th>
              </tr>
            </thead>
            <tbody>
                {
                    product.map((p,index)=>{
                        return(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.detail}</td>
                                <td>{p.date}</td>
                                <td><Badge variant="info">{p.view}</Badge>{' '}</td>
                                <td><Image src={p.picture} rounded width={50}/></td>
                                
                                <td className="icon">
                                    <Link to={`/detail/${p.id}/title/${p.title}`}>
                                    <Button variant="danger"  >Click <MouseIcon/></Button>
                                    </Link>
                                    <Button variant="danger"    className="ml-1" onClick={() => addCart(p)} >Buy</Button>
                                    
                                    </td>
                            </tr>
                            
                        )
                    })
                }
              
            </tbody>
          </Table>
          </ProductStyled>
  );
};

const ProductStyled = styled.div`
Table{
    tr:nth-child(even) {background-color: var(--sidebar-dark-color);}
    tr:nth-child(odd) {background-color: var(--background-dark-color);}
    color: var(--font-light-color);
    tr:hover td {background-color: var(--primary-color-light);}
    .icon{
        width: 215px;
    }
    th{
        background-color: var(--sidebar-dark-color);
    }
    th, td {
        border-color: var(--border-color);
      }
}
`

export default Product;