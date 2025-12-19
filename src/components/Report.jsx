import { useState } from "react";

function Report() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    animalType: "",
    description: "",
    file: null, 
   });
  const [fileName, setFileName] = useState("No file chosen");


   function handleChange(e) {   
    const {name, value} = e.target;
    setFormData({...formData, [name]: value });
   }

  //  function handleFileChange(e) {
  //   setFormData({...formData, file: e.target.files[0]});
  //  }

  function handleFileChange(e) {
  const file = e.target.files[0];
  setFormData({ ...formData, file });

      if (file) {
        setFileName(file.name);
      }
    }


   function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Report submitted");
    
   }


 return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🐶 Report Injured Animal
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location (Area / City)"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="animalType"
          value={formData.animalType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Animal Type</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Cow</option>
          <option>Other</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe the injury"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="4"
        />

        <div className="border p-3 rounded">
        <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded inline-block"
            >
             Share Image / Video
            </label>

            <span className="ml-3 text-gray-600">{fileName}</span>

            <input
              id="fileUpload"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
        </div>


        {/* <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="w-full"
        /> */}

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Report;
   
