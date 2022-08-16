import './Catalogue.css';
import CatalogueCard from './CatalogueCard';
const Catalogue = () => {

    return (
        <section className="catalogue-section">
            <div className="catalogue-colection">
                <h1 className="catalogue-colection-title">Welcome to the Books Catalogue</h1>
                <ul className="catalogue-colection-list">
                        <CatalogueCard />
                </ul>
            </div>
            <div className="catalogue-nodata">
                <h2 className="catalogue-nodata-msg">No Books in database!</h2>
                <article className="catalogue-nodata-article-img">
                    <img className="catalogue-nodata-img"src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
                </article>
            </div>
        </section>
    )
}

export default Catalogue;