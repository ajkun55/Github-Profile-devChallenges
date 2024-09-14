/* eslint-disable react/prop-types */

import Nesting from "./assets/Nesting.svg";
import Star from "./assets/Star.svg";
import Chield from "./assets/Chield_alt.svg";

function User({ data, repos }) {
  function daysAgo(timeString) {
    // Parse the given time string into a Date object
    const givenDate = new Date(timeString);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = currentDate - givenDate;

    // Convert milliseconds to days (1000 ms/s * 60 s/min * 60 min/h * 24 h/day)
    const msInDay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.floor(diffInMs / msInDay);

    return diffInDays;
  }

  return (
    <div className="mt-24 w-5/6 mx-auto">
      <div className="flex items-start gap-8">
        <span className="p-2 rounded-xl bg-bg-700 w-fit h-fit grid place-content-center">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-lg"
          />
        </span>

        <div className="mt-12 flex flex-col lg:flex-row lg:gap-3">
          <span className="flex items-center gap-5 py-3 px-5 bg-bg-900 my-2 w-fit rounded-xl">
            <p className="text-bg-300">Followers</p>
            <span className="w-[1px] h-full bg-bg-500 "></span>
            <p className="text-white">{data.followers}</p>
          </span>
          <span className="flex items-center gap-5 py-3 px-5 bg-bg-900 my-2 w-fit rounded-xl">
            <p className="text-bg-300">Following</p>
            <span className="w-[1px] h-full bg-bg-500 "></span>
            <p className="text-white">{data.following}</p>
          </span>
          <span className="flex items-center gap-5 py-3 px-5 bg-bg-900 my-2 w-fit rounded-xl">
            <p className="text-bg-300">Location</p>
            <span className="w-[1px] h-full bg-bg-500 "></span>
            <p className="text-white">{data.location}</p>
          </span>
        </div>
      </div>

      <h1 className="text-white text-[2rem] mt-10 font-bold">{data.name}</h1>
      <p className="text-custom-gray mt-3">{data.bio}</p>

      <div className="grid lg:grid-cols-2 my-8 lg:gap-x-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="my-5 rounded-xl bg-gradient-to-r from-bg-900 to-dark-blue p-5 flex flex-col justify-between"
          >
            <h2 className="text-white text-xl">{repo.name}</h2>
            <p className="text-custom-gray text-base my-3">
              {repo.description}
            </p>
            <span className="flex items-center gap-5 text-custom-gray">
              {repo.license && (
                <span className="flex items-center gap-1">
                  <img src={Chield} alt="" />
                  <p>{repo.license.spdx_id}</p>
                </span>
              )}
              <span className="flex items-center gap-1">
                <img src={Nesting} alt="" />
                <p className="text-xl">{repo.forks}</p>
              </span>
              <span className="flex items-center gap-1">
                <img src={Star} alt="" />
                <p className="text-xl">{repo.stargazers_count}</p>
              </span>
              <p className="text-xs">
                {daysAgo(repo.updated_at) === 0
                  ? `Updated today`
                  : `Updated ${daysAgo(repo.updated_at)} days ago`}
              </p>
            </span>
          </div>
        ))}
      </div>

      <span className="grid place-content-center">
        <a href={data.repos_url} className="text-custom-gray font-semibold">
          View all repositories
        </a>
      </span>
    </div>
  );
}

export default User;
