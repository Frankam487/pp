import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 // N'oublie pas d'importer tes styles

const Clients = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="clients">
            <div className="first-text">
                <h4>Testimonial</h4>
                <h1>C'que mes clients disent</h1>
            </div>
            <Carousel responsive={responsive}>
                <div className="container">
                    <div className="top-section">
                        <div className="image">
                            <img src="../../public/work-1699510.jpg" alt="Image ronde" />
                        </div>
                        <div className="titles">
                            <h1>Titre principal</h1>
                            <h2>Sous-titre</h2>
                        </div>
                    <div className="spans">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                    </div>
                    </div>


                    <div className="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel orci euismod.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Clients;
