import React from "react";



const PorductList = ({products, setListUpdated}) => {


    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:4000/products/' + id, requestInit)
        .then(res => res.text('Book Deleted'))
        .then(res => console.log('Product saved'))

        setListUpdated(true);
    }

    return (
        <table className="table">
            <tboddy>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Catergory</th>
                    </tr>
                </thead>
                <thead>
                    {products.map(product => (
                        <tr key={product.product_id}>
                            <td>{product.product_id}</td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.quantity}</td>
                            <td>{product.id_cat}</td>
                            <td>
                                <div className="mb-3">
                                    <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </thead>
            </tboddy>
        </table>
    )
}


export default PorductList;