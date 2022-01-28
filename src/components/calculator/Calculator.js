import React, {useState} from 'react';
import "../calculator/Calculator.css"
import Button from "../button/Button";

const Calculator = () => {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    function handleSubmit (e) {
        e.preventDefault()
        console.log(age + gender + height + weight)

    }

    return (
        <div>
            <h2 className="calculator-title">Calorier calculator</h2>
<div className="calculator-styles">
    <form  onSubmit={handleSubmit}>
        <label className="label-styling" htmlFor="age-field"> Age
             <input
                type="age"
                id="age-field"
                name="age"
                placeholder="15"
                value={age}
                min={0}
                max={120}
                onChange={(e) => setAge(e.target.value)}
            />
        </label>
        <div>
            <label htmlFor="gender-field">Gender
                <input type="radio"
                       checked={gender === '2'}
                       onChange={(e) => setGender(e.target.value)}
                       className="genderM"
                       name="gender" value="2" />Male

                <input type="radio"
                       checked={gender === '1'}
                       onChange={(e) =>setGender(e.target.value)}
                       className="genderF"
                       name="gender" value="1" />Female
            </label>
            <div>
                <label htmlFor="height-field">Height
                    <input type="height-field"
                           value={height}
                           onChange={(e) => setHeight(e.target.value)}
                           name="height"
                           placeholder="180"
                    /> CM
                </label>
            </div>
            <div>
                <label htmlFor="weight-field">Weight
                    <input type="weight-field"
                           value={weight}
                           onChange={(e) => setWeight(e.target.value)}
                           name="weight"
                           placeholder="85"
                    /> KG
                </label>
            </div>
            <div className="btn-calc-styling">
                <Button
                    clickHandler={handleSubmit}
                    styleCompId={"calc-btn-color"}
                >calculate</Button>
            </div>
        </div>
    </form>

    <div className="calculation-field">
        Here comes an image

        <p>Age:  </p> {age}
        <p>gender 1 female 2 male </p> {gender}
        <p>height</p> {height}
        <p>weight</p> {weight}
    </div>
</div>


            hier komt calculator stuff
        </div>
    );
};

export default Calculator;