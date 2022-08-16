import './UpdateBook.css';

const UpdateBook = () => {

    return (
        <section className="update-section">
        <form className="update-form" method="POST">
            <fieldset className="update-form-fieldset">
                <legend className="update-form-legend" >Update Book</legend>
                    <div className="update-form-field" >
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" name="category" />
                    </div>
                  
                    <div className="update-form-field" >
                        <label htmlFor="image">Iamge</label>
                        <input type="text" id="image" name="imageUrl" />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description" />
                    </div>
                    <div className="update-form-field" >
                        <input type="submit" className="update-btn" value="Update Book" />
                    </div>
            </fieldset>
        </form>
    </section>
    )
}

export default UpdateBook;