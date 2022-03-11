import React from 'react'
import styled from 'styled-components'
import { Table} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)
    
    const dispath = useDispatch()

  return (
    <CartStyled>
            <Table striped bordered responsive="lg">
            <thead>
              <tr>
                <th> ID </th>
                <th> Produce ID </th>
                <th> Produce Name </th>
                <th> Produce Price </th>
                <th> Qty </th>
                <th> Total </th>
              </tr>
            </thead>
            <tbody>
            {
                    cart.map((p,index)=>{
                        return(
                            <tr key={p.id}>
                                <td>{index+1}</td>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.qty}</td>
                                <td>{p.qty*p.price}</td>
                                
                            </tr>      
                        )
                    })
                }              
            </tbody>
          </Table>
        </CartStyled>
  )
}
const CartStyled = styled.div`
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

export default Cart