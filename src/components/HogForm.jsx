import { useState } from "react";

const HogForm = ({setHogs}) => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [image, setImage] = useState("");
    const [medal, setMedal] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setHogs(hogs => [...hogs, {name, weight, specialty, greased, "highest medal achieved": medal}])
    }

    return (
        <form onSubmit={handleSubmit} className="ui form">
            <div className="fields">
                <div className="field">
                    <label htmlFor="name-input">Name:</label>{" "}
                    <input 
                        id="name-input" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="weight-input">Weight:</label>{" "}
                    <input 
                        id="weight-input" 
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="specialty-input">Specialty:</label>{" "}
                    <input 
                        id="specialty-input" 
                        value={specialty}
                        onChange={e => setSpecialty(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="image-input">Image URL:</label>{" "}
                    <input 
                        id="image-input" 
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="medal-input">Highest Medal Achieved:</label>{" "}
                    <input 
                        id="medal-input" 
                        value={medal}
                        onChange={e => setMedal(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="greased-input">Greased?</label>{" "}
                    <input 
                        id="greased-input" 
                        type="checkbox" 
                        className="ui checkbox"
                        value={greased}
                        checked={greased}
                        onChange={e => setGreased(e.target.value)}
                    />
                </div>
                <button className="ui button" type="submit">Add Hog</button>
            </div>
        </form>
    );
}

export default HogForm;
