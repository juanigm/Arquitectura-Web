import React from "react";

const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand</label>
                <input type="text" id="brand" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">price</label>
                <input type="text" id="price" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" id="description" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="text" id="quantity" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" id="category" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;