import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import { Link, useParams } from "react-router-dom";

const EditRoom = () => {
	const [room, setRoom] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	});

	const [imagePreview, setImagePreview] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { roomId } = useParams();

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0];
		setRoom({ ...room, photo: selectedImage });
		setImagePreview(URL.createObjectURL(selectedImage));
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setRoom({ ...room, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Vérifier si une photo a été sélectionnée
		if (!room.photo) {
			setErrorMessage("Veuillez sélectionner une photo.");
			return;
		}

		try {
			const response = await updateRoom(roomId, room);
			if (response.status === 200) {
				setSuccessMessage("Chambre mise à jour avec succès !");
				const updatedRoomData = await getRoomById(roomId);
				setRoom(updatedRoomData);
				setImagePreview(updatedRoomData.photo);
				setErrorMessage("");
			} else {
				setErrorMessage("Erreur lors de la mise à jour de la chambre.");
			}
		} catch (error) {
			console.error(error);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const roomData = await getRoomById(roomId);
				setRoom(roomData);
				setImagePreview(roomData.photo);
			} catch (error) {
				console.error(error);
			}
		};

		fetchRoom();
	}, [roomId]);

	return (
		<div className="container mt-5 mb-5">
			<h3 className="text-center mb-5 mt-5">Modifier la chambre</h3>
			<div className="row justify-content-center">
				<div className="col-md-8 col-lg-6">
					{successMessage && (
						<div className="alert alert-success" role="alert">
							{successMessage}
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="roomType" className="form-label hotel-color">
								Type de chambre
							</label>
							<input
								type="text"
								className="form-control"
								id="roomType"
								name="roomType"
								value={room.roomType}
								onChange={handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="roomPrice" className="form-label hotel-color">
								Prix de la chambre
							</label>
							<input
								type="number"
								className="form-control"
								id="roomPrice"
								name="roomPrice"
								value={room.roomPrice}
								onChange={handleInputChange}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="photo" className="form-label hotel-color">
								Photo
							</label>
							<input
								required
								type="file"
								className="form-control"
								id="photo"
								name="photo"
								onChange={handleImageChange}
							/>
							{imagePreview && (
								<img
									src={`data:image/jpeg;base64,${imagePreview}`}
									alt="Aperçu de la chambre"
									style={{ maxWidth: "400px", maxHeight: "400" }}
									className="mt-3"
								/>
							)}
						</div>
						<div className="d-grid gap-2 d-md-flex mt-2">
							<Link to={"/existing-rooms"} className="btn btn-outline-info ml-5">
								Retour
							</Link>
							<button type="submit" className="btn btn-outline-warning">
								Modifier la chambre
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditRoom;
