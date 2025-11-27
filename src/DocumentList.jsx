import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DocumentList() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await axios.get("http://127.0.0.1:8000/files");
    setFiles(res.data.files);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    await axios.delete(`http://127.0.0.1:8000/delete/${id}`);
    fetchFiles(); // refresh list
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Uploaded Documents</h3>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Filename</th>
            <th>Description</th>
            <th>Uploaded Date</th>           
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => (
            <tr key={file.file_id}>
              <td>{file.filename}</td>
              <td>{file.description}</td>
              <td>{new Date(file.uploadDate).toLocaleString()}</td>              
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(file.file_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
