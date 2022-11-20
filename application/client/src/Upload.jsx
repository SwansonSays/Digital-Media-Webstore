import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Upload = () => {
	function handleSubmit(event) {
		event.preventDefault();
		console.log("Submit");
	}

	function setCategories() {
		//Categories return from DB goes here
		const categories = { 'cat': ['Audio', 'Video', 'Class'] }; //Hard coded for testing
		/*
		const options = []; //Array of <option> to be returned to dropdown

		//Populates options array for each category returned by DB
		for (let i = 0; i <= categories.cat.length - 1; i++) {
			options.push(<option key={i} value={categories.cat[i]}>{categories.cat[i]}</option>);
		}
		*/
		const options = categories.cat.map((cat, index) => <option key={index} value={cat}>{cat}</option>);
		console.log(options);
		return options;
    }

	return (
		<div>
			<NavBar ></NavBar>
			<div className="upload-wrapper">

				<form className="upload-form container" onSubmit={handleSubmit}>
					<br />
					<div className="title">
						<h3>Post an item</h3>
					</div>
					<br />
					<br />

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Product Name:*</div>
						<div className="upload-gap"/>
						<input type="text" className="form-control upload-input" placeholder="Title" required/>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Category:*</div>
						<div className="upload-gap" />
						<select className="category-select upload-select required">
							<option>Category</option>
							{setCategories()}
						</select>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Price:*</div>
						<div className="upload-gap" />
						<input type="text" className="form-control upload-input" placeholder="0.00" required/>	
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Description:</div>
						<div className="upload-gap" />
						<textarea className="form-control upload-input" placeholder="Description..." />
					</div>

					<div className="input-group mb-3 upload-group">
						<input className="form-control upload-file" type="file" id="formFile" required/>
					</div>

					<button type="button" className="btn btn-primary upload-btn">Post</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Upload;