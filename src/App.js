import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
    const {data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts" );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="container">
            <h1>Product List</h1>

            <div className="card-container">
                {data.map((item) => (
                    <div className="card" key={item.id}>
                    <p>{item.title}</p>
                    </div>
           ))}
           </div>
           </div>
            );
}
export default App;
           