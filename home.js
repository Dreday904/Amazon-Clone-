import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
            <div className="Home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTUzYjk4NTYt/YTUzYjk4NTYt-ZmNlYWQwMzAt-w1500._CB664441282_.jpg"
                    alt="" />

                <div className="home__row">
                    <Product title='Introducing the Xbox Series S, the smallest,
                             sleekest Xbox console ever.'
                        price={299.99}
                        image="https://wholesgame.com/wp-content/uploads/Xbox-Series-S-Reveal-Thumb-4-x-5.jpg"
                        rating={4}
                    />
                    <Product title='Playstation 5 Console - Lightning Speed -
                                                Harness the power of a custom CPU,
                                                GPU, and SSD with Integrated I/O
                                                that rewrite the rules of what a
                                                PlayStation console can do. '
                        id="49538094"
                        price={499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
                        rating={4}
                    />
                 </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
          </div>
    );
}

export default Home;
