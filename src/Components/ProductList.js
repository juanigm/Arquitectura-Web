import React from "react";




const PorductList = ({product, setProduct, products, setListUpdated}) => {


    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:4000/products/' + id, requestInit)
        .then(res => res.text('Product Deleted'))
        .then(res => console.log(res))

        setListUpdated(true);
    }

    let{name, brand, price, description, quantity, category} = product

    const handleUpdate = id =>{
        if(name === '' || brand === '' || price <= 0 || description === '' || quantity <= 0 || category <= 0){
            alert('All fields are requerid')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:4000/products/' + id, requestInit)
        .then(res => res.text('Book Deleted'))
        .then(res => console.log(res))

        setProduct ({
            name: '',
            brand: '',
            price: 0,
            description: '',
            quantity: 0,
            category: 0
        })

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
                        <th>Category</th>
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
                                    <button onClick={() => handleDelete(product.product_id)} className="btn btn-danger">Delete</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => handleUpdate(product.product_id)} className="btn btn-dark">Update</button>
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