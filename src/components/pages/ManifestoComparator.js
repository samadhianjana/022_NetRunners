import React, { useState, useEffect } from "react";

function ManifestoComparator() {
  // State to hold the selected topic
  const [selectedTopic, setSelectedTopic] = useState("");
  // State to hold the data from the file
  const [manifestoData, setManifestoData] = useState({});

  // Load the data from the JSON file
  useEffect(() => {
    fetch("/ManifestoComparator.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log data to ensure it's correct
        setManifestoData(data);
      })
      .catch((error) => console.error("Error loading manifesto data:", error));
  }, []);

  // Function to update selected topic
  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div id="comparator">
      <div className="main-content">
        <h1>Compare the Manifestos of Presidential Candidates!</h1>
        <p>
          Our manifesto comparator is a powerful tool that allows you to easily
          compare the platforms of Presidential candidates side by side. With
          this feature, you can explore their key policies, positions on
          important issues, and overall vision for the future. It's designed to
          help you make well-informed decisions by breaking down the
          similarities and differences between candidates, giving you a clearer
          understanding of their goals and priorities. Whether you're undecided
          or just want to stay informed, this tool makes it simple to evaluate
          the manifestos and choose the candidate that aligns with your values.
        </p>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          What would you like to compare?
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("economy")}>Economy and Job Creation</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("healthcare")}>Healthcare</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("education")}>Education</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("socialWelfare")}>Social Welfare</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("infrastructure")}>Infrastructure Development</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("environment")}>Environmental and Climate Change Policies</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("lawOrder")}>Law and Order</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("security")}>National Security and Defense</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("foreignPolicy")}>Foreign Policy and Diplomacy</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSelect("humanRights")}>Human Rights and Equality</a></li>
        </ul>
      </div>

      {/* Display selected topic data */}
      <div>
  {selectedTopic && manifestoData[selectedTopic] ? (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '800px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2em', color: '#333' }}>
        {selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)}
      </h2>
      {Object.keys(manifestoData[selectedTopic]).map((candidate) => (
        <div key={candidate} style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.5em', padding: '10px 0' }}>
            {candidate}
          </h3>
          <p style={{ textAlign: 'left', lineHeight: '1.6', fontSize: '1.1em', padding: '0 20px' ,color: "#555"}}>
            {manifestoData[selectedTopic][candidate].map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p style={{ textAlign: 'center', fontSize: '1.2em' }}>Select a topic to view details</p>
  )}
</div>


    </div>
  );
}

export default ManifestoComparator;
