import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
    const { data, loading, error } =
        useFetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );

    if (error) {
        return (
            <div className="error-wrapper">
                <div className="error-box">
                    <p> Error: Failed to fetch</p>
                </div>
            </div>
        );
    }
    
    if (loading) {
        return (
        <div className="error-wrapper">
            <div className="error-box">
                <p>Loading...</p>
            </div>
        </div >
    );
  }
  return (
    <div className="page">
        <h2 classsName="title">Photos</h2>
        <div className="grid">
            {data.map((item) => (
                <div key={item.id} className="card">
                    <div className="photo-box" style={{backgroundColor: randomColor() }}>
                        600*600
                        </div>
                        <p className="caption">{item.title}</p>
                        </div>
            ))}
        </div>
    </div>
  );
}

function randomColor() {
    const colors = [
        "#6c5ce7",
        "#00b894",
        "#0984e3",
        "#e17055",
        "#fd79a8",
        "#55efc4",
        "#ffeaa7",
        "#636e72",
        "#353",
        "#0145",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export default App;

