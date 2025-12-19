import React, { useEffect, useState } from 'react'

function Admin() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(savedReports);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🛠 Admin Dashboard
      </h1>
      {reports.length === 0 ? (
        <p>No reports yet ❌</p>
      ) : (
        reports.map((r, index) => (
          /* Single Report Card */
          <div key={index} className="border rounded-lg p-4 mb-4 shadow">
            <p><b>Name:</b> {r.name}</p>
            <p><b>Phone:</b> {r.phone}</p>
            <p><b>Location:</b> {r.location}</p>
            <p><b>Animal:</b> {r.animalType}</p>
            <p><b>Description:</b> {r.description}</p>

            <img
              src={r.preview}
              alt="animal"
              className="w-64 mt-3 rounded"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
