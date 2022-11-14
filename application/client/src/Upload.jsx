import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Upload = () => {
	function handleSubmit(event) {
		event.preventDefault();
		console.log("Submit");
	}

	function setCategories() {

    }

	return (
		<div>
			<NavBar ></NavBar>
			<div className="upload-wrapper">

				<form className="upload-form container" onSubmit={handleSubmit}>
					<div className="title">
						<h3>Post an item</h3>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Product Name:*</div>
						<input type="text" className="form-control upload-input" placeholder="Title" required/>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Category:*</div>
						<select className="category-select upload-input required">
							<option>Category</option>
							{setCategories}
						</select>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Price:*</div>
						<input type="text" className="form-control upload-input" placeholder="0.00" required/>	
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Description:</div>
						<textarea className="form-control upload-input" placeholder="Description..." />
					</div>

					<div className="input-group mb-3 upload-group">
						<input className="form-control upload-file" type="file" id="formFile" required/>
					</div>

					<button type="button" class="btn btn-primary upload-btn">Post</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Upload;