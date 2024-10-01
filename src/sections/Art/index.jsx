import React, { useState, useEffect } from "react";

const Art = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/art");
      const data = await response.json();
      setArtworks(data);
    };

    fetchArtworks();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artworks.map((art) => (
            <li key={art.id}>
              <div className="frame">
                <img
                  src={`https://boolean-uk-api-server.fly.dev${art.imageURL}`}
                  alt={art.title}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {art.publicationHistory.map((history, index) => (
                  <li key={index}>{history}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Art;
