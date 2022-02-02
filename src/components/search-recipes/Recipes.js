import React, {useEffect, useState} from 'react';
import "../search-recipes/Recipes.css"
import axios from "axios";
import Button from "../button/Button";
import {useHistory} from "react-router-dom";

const Recipes = () => {

    const apiKey = "?apiKey="

    const [apiData, setApiData] = useState(``)
    const [searchData, setSearchData] = useState(``)
    const [search, setSearch] = useState(``)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        setSearchData(search)
    }

    useEffect(() => {
        const source = axios.CancelToken.source()

        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apiKey}&number=3&query=${searchData}`, {
                    cancelToken: source.token,
                });

                setApiData(result.data.results)

            } catch (e) {
                console.error(e);
            }
        }

        if (searchData) {
            fetchData();
        }
        return function cleanup() {
            source.cancel();
        }

    }, [searchData]);

    return (
        <div>
            <div className="recipe-form-styling">
                <form className="form-styling">
                    <label htmlFor="search-field">
                        <input
                            type="search"
                            id="search-field"
                            name="search"
                            placeholder="Typ in a recipe or ingredient"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </form>
                <div className="btn-recipe-styling">
                    <Button styleCompId="recipe-btn-styling"
                            clickHandler={handleSubmit}
                    >Search</Button>
                </div>
            </div>
            <div className="recipe-data">
                {apiData &&
                <>
                    <ul>
                        {apiData.map((data) => {

                            function redirectFunction(e) {
                                e.preventDefault()
                                history.push(`/recipe-info/${data.id}`);
                            }

                            return (
                                <li key={data.id}>
                                    <h2>{data.title}</h2>
                                    <img src={data.image} alt="food"/>
                                    <div className="btn-login-styling">
                                        <Button
                                            clickHandler={redirectFunction}
                                        >Recipe Info</Button>
                                    </div>
                                </li>)
                        })}
                    </ul>
                </>}
            </div>
        </div>
    );
};

export default Recipes;