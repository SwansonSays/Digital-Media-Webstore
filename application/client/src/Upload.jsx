/* 
 * File: Upload.jsx
 * Author: Robert Swanson, Donnovan Jiles
 * Description: Page for uploading a file to webapp
 */
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Upload = () => {

	let uploadInput;

	async function handleUploadImage(event) {
		event.preventDefault();

		const file_data = new FormData();
		const upload_data = JSON.stringify({"name" : event.target[0].value, "category" : event.target[1].value, 
						"price" : event.target[2].value, "description" : event.target[3].value
						})
		file_data.append('file', uploadInput.files[0]);

		try {
			const response = await fetch('http://localhost:5000/post', {
				method : "POST",
				body : upload_data,
				headers: { 'Content-Type': 'application/json' }
			})
		} catch (error){
			console.error(error)
		}


		fetch('http://localhost:5000/savefile', {
		method: 'POST',
		body: file_data
		})
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

				<form className="upload-form container" onSubmit={handleUploadImage}>
					<br />
					<div className="title">
						<h3>Post an item</h3>
					</div>
					<br />
					<br />
					<div className="input-group mb-3 upload-group">
						<div className="upload-text"><span style={{ color: 'red' }} >*</span> Required fields</div>
					</div>
					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Product Name:<span style={{ color: 'red' }} >*</span></div>
						<div className="upload-gap"/>
						<input type="text" className="form-control upload-input" placeholder="Title" required/>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Category:<span style={{ color: 'red' }} >*</span></div>
						<div className="upload-gap" />
						<select className="category-select upload-select required">
							<option>Category</option>
							{setCategories()}
						</select>
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Price:<span style={{ color: 'red' }} >*</span></div>
						<div className="upload-gap" />
						<input type="text" className="form-control upload-input" placeholder="0.00" required/>	
					</div>

					<div className="input-group mb-3 upload-group">
						<div className="text-left upload-text">Description:</div>
						<div className="upload-gap" />
						<textarea className="form-control upload-input" placeholder="Description..." />
					</div>

					<div className="input-group mb-3 upload-group">
						<input className="form-control upload-file" ref={(ref) => { uploadInput = ref; }} type="file" name="file" required/>
					</div>

					<button type="submit" className="btn btn-primary upload-btn">Post</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Upload;