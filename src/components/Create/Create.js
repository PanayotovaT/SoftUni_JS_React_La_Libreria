import './Create.css';

const Create = () => {

    return (
        <section className="create-section">
            <form className="create-form" method="POST">
                <fieldset className="create-form-fieldset">
                    <legend className="create-form-legend" >Add a new book to the library</legend>
                        <div className="create-form-field" >
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" />
                        </div>
                        <div className="create-form-field" >
                            <label htmlFor="category">Category</label>
                            <input type="text" id="category" name="category" />
                        </div>
                      
                        <div className="create-form-field" >
                            <label htmlFor="image">Iamge</label>
                            <input type="text" id="image" name="imageUrl" />
                        </div>
                        <div className="create-form-field" >
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" />
                        </div>
                        <div className="create-form-field" >
                            <label htmlFor="author">Author</label>
                            <input type="text" id="author" name="author" />
                        </div>
                        <div className="create-form-field" >
                            <label htmlFor="description">Description</label>
                            <textarea type="text" id="description" name="description" />
                        </div>
                        <div className="create-form-field" >
                            <input type="submit" className="create-btn" value="Add Book" />
                        </div>
                </fieldset>
            </form>
        </section>
    )
}

export default Create;