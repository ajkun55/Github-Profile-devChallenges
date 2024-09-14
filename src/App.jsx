import { useState, useEffect } from "react";
import User from "./User";
import Search from "./assets/Search.svg";

function App() {
  const [user, setUser] = useState("github");
  const [data, setData] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setRepos([data][0].slice(0, 4));
      })
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <main className="w-full bg-bg-700 min-h-screen py-12 bg-[url('./assets/hero-image-github-profile.png')] bg-no-repeat bg-[center_top] bg-[length:100%_240px]">
      <form className="w-5/6 mx-auto grid h-14 relative  max-w-[700px]">
        <img src={Search} alt="" className="absolute left-8 top-4 w-6 h-6" />
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          className="rounded-xl bg-bg-700 outline-none pl-20 text-white"
          placeholder="username"
        />
      </form>

      {data && repos && <User data={data} repos={repos} />}
    </main>
  );
}

export default App;
