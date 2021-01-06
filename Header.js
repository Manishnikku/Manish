import React from "react";

const Header = (props) => {
    const{search, onInputChange, onSearchClick } = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"><span class="material-icons brand-icon">
                fastfood</span>Food Recipe</h1>
            <div class="input-group w-50 mx-auto" >
                <input type="text" class="form-control" placeholder="Search Your Recipe..."value={props.search}
                onChange={onInputChange} />
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipes</button>
</div>
            </div>
    )
}
export default Header;