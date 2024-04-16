import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, clear, removeItem } from '../../Store/Slices/Cart'
export default function Cart() {
    const { list } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    let totalPrice = 0;
    const items = list?.map((e, index) => {
        totalPrice += (e.attributes.price / 100) * e.quantity;
        return (
            <tr>
                <td align='center'>{index + 1}</td>
                <td align='center'><img alt={e.attributes.name} src={e.attributes['image-urls'][0]} style={{ width: '60px', height: '60px' }} /></td>
                <td align='center'>{e.attributes.name}</td>
                <td align='center'>{e.attributes.price / 100}</td>
                <td align='center'>{e.quantity}</td>
                <td align='center'>{(e.attributes.price / 100) * e.quantity}</td>
                <td align='center'>
                    <button className="btn btn-danger m-2 p-2" onClick={() => dispatch(removeItem(e.id))}>-</button>
                    <button className="btn btn-success m-2 p-2" onClick={() => dispatch(addItem(e))}>+</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            {list.length>0 ? <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" align='center'>#</th>
                            <th scope="col" align='center'>image</th>
                            <th scope="col" align='center'>name</th>
                            <th scope="col" align='center'>price</th>
                            <th scope="col" align='center'>quantity</th>
                            <th scope="col" align='center'>total price</th>
                            <th scope="col" align='center'>add/remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td align='center'></td>
                            <td align='center'></td>
                            <td align='center'></td>
                            <td align='center'></td>
                            <td align='center'></td>
                            <td align='center'>Total Price</td>
                            <td align='center'>{totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
                <button className='btn btn-warning p-2' onClick={()=>dispatch(clear())}>Clear Cart</button>
            </div> : <h2>cart is empty</h2>}

        </div>
    )
}
