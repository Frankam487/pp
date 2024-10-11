import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    }

    return (

        <div className="clients">
            <div className="text">
                <h4>Testimonial</h4>
                <h1>C'que mes clients disent</h1>
            </div>
            <Carousel responsive={responsive}>
                <div className="">
                    <img src="../../public/cup-7263953.jpg" alt="" />
                    <h3>Frank Kamgang</h3>
                    <p>Client</p>
                    <div className="stars">
                        <span className="fas "></span>
                    </div>
                </div>
                <div>
                    <img src="../../public/cup-7263953.jpg" alt="" />
                    <h3>Frank Kamgang</h3>
                    <p>Client</p>
                    <div className="stars">
                        <span className="fas "></span>
                    </div>
                </div>
                <div>
                    <img src="../../public/cup-7263953.jpg" alt="" />
                    <h3>Frank Kamgang</h3>
                    <p>Client</p>
                    <div className="stars">
                        <span className="fas "></span>
                    </div>
                </div>
                <div>
                    <img src="../../public/cup-7263953.jpg" alt="" />
                    <h3>Frank Kamgang</h3>
                    <p>Client</p>
                    <div className="stars">
                        <span className="fas "></span>
                    </div>
                </div>
                <div className="">
                    <img src="../../public/fr.jpg" alt="" />
                    <h3>Frank Kamgang</h3>
                    <p>Client</p>
                    <div className="stars">
                        <span className="fas fa-star"></span>
                    </div>
                </div>
            </Carousel>

        </div>
    );
}

export default Clients;