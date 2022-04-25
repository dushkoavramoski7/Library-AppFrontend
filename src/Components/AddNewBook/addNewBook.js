import React from 'react';
import {useNavigate} from 'react-router-dom';
const AddNewBook = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        availableCopies: 0,
        category: 'NOVEL',
        author: 1,
        isTaken: false
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const availableCopies = formData.availableCopies;
        const category = formData.category;
        const author = formData.author;

        props.onAddBook(name, availableCopies, category, author);
        history("/books");
    }



    return (
        <div className="row mt-10 m-10" style={{marginLeft: "350px", marginTop: "50px"}}>
            <div className="col-md-5 m-4">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <br/>
                    <button id="submit" type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AddNewBook;
