import PropTypes from "prop-types";
import {useState} from "react";

function GoodsComponent(props) {
    const [nameValue, setName] = useState(props.Name);

    const handleName = () => {
        if (nameValue === "Bizon") {
            setName("Hell");
        } else if (nameValue === "Coca Cola") {
            setName("Fanta");
        }
        else if(nameValue==="natural cappy"){
            setName("Sirab");
        }

    }
    const [priceValue, setPrice] = useState(props.price);
    const handlePrice = () => {
        if (nameValue === "Hell") {
            setPrice(2);
        } else if (nameValue === "Sirab") {
            setPrice(1.80);
        }
        else if(nameValue==="Fanta"){
            setPrice(1.20);
        }
    }
    const [descriptionValue, setDescription] = useState(props.description);
    const handleDescription = () => {
        if (nameValue === "Hell") {
            setDescription("Harmful");
        } else if (nameValue === "Sirab") {
            setDescription("Auspicious");
        }
        else if(nameValue==="Fanta"){
            setDescription("Harmful");
        }
    }


    return (
        <div id={"countenirDiv"}>
            <p onClick={handleName}>Name-> {nameValue}</p>
            <p onClick={handlePrice}>Price-> {priceValue}</p>
            <p onClick={handleDescription}>Description-> {descriptionValue}</p>
            <br></br>
        </div>
    );
}

GoodsComponent.propTypes = {
    Name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
}

export default GoodsComponent;