import { useState, useEffect } from "react";
import "./App.css";
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=fd933377ec6343f2997122351aaab327";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, description, publishedAt } = jobs.articles[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{publishedAt}</h4>
          <p>{description}</p>
        </article>
      </div>
    </section>
  );
}

export default App;
