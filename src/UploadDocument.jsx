import React, { useState } from "react";
import axios from "axios";

export default function UploadDocument() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    axios.post("http://127.0.0.1:8000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("File uploaded successfully!");
  };

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-3 fw-bold">Upload file</h3>
            <form onSubmit={handleUpload}>


              <input type="file" onChange={(e) => setFile(e.target.files[0])} required />

              <input
                type="text"
                className="form-control mt-3"
                placeholder="Enter file description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <button className="btn btn-primary mt-3">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </div>





  );
}
