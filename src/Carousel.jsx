import { Component } from "react";


class Carousel extends Component {
    state = {
        active: 0,
    };


    static defaultProps = {
        images:  ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handleIndexCheck =(e) =>{
        console.log(this);
        this.setState( {
            active: +e.target.dataset.index,
        }

        );
    }


    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className="carousel">
                <img data-testid="hero" src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img 
                            onClick={this.handleIndexCheck}
                            data-index={index}
                            key={photo}
                            src={photo}
                            data-testid={`thumbnail${index}`}
                            className={index === active ? "active" : ""}
                            alt= "animal thumbnail" />


                    ))}
                </div>
            </div>
        )
    }
    }
export default Carousel;