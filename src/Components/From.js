import React from "react";

const Form = ({product, setProduct}) => {

     //This function is for i can modify a status
    const handleChange = e =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    //To handle error
    let{name, brand, price, description, quantity, category} = product

    //This function is for make the query and save data in DBB
    const handleSubmit = () =>{
        price = parseFloat(price, 10);
        quantity = parseInt(quantity, 10);
        category = parseInt(category, 10);
        if(name === '' || brand === '' || price <= 0 || description === '' || quantity <= 0 || category <= 0){
            alert('All fields are requerid')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:4000/products', requestInit)
        .then(res => res.json())
        .then(res => console.log('Product saved'))

        //For restart product state
        setProduct ({
            name: '',
            brand: '',
            price: 0,
            description: '',
            quantity: 0,
            category: 0
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={name} name="name" onChange={handleChange} type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand</label>
                <input value={brand} name="brand" onChange={handleChange} type="text" id="brand" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">price</label>
                <input value={price} name="price" onChange={handleChange} type="text" id="price" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input value={description} name="description" onChange={handleChange} type="text" id="description" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input value={quantity} name="quantity" onChange={handleChange} type="text" id="quantity" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input value={category} name="category" onChange={handleChange} type="text" id="category" className="form-control"/>
            </div> 
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;