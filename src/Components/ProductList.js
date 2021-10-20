import React from "react";

const PorductList = ({products}) => {
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
                            <th>{product.product_id}</th>
                            <th>{product.name}</th>
                            <th>{product.brand}</th>
                            <th>{product.price}</th>
                            <th>{product.description}</th>
                            <th>{product.quantity}</th>
                            <th>{product.id_cat}</th>
                        </tr>
                    ))}
                </thead>
            </tboddy>
        </table>
    )
}


export default PorductList;