import React from "react";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title: "Title 1",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Title 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Title 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
];

function UserData({ username }) {
  return (
    <div className="mb-20">
      <div className="bg-white p-4 w-full max-w-full mx-auto flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4 w-full text-center">
          GitHub Contributions for {username}:
        </h3>
        <div className="w-full flex justify-center overflow-x-auto">
          <div className="min-w-[800px] transform scale-75">
            <GitHubCalendar username={username} />
          </div>
        </div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4 mt-4">
          {data.map((item, index) => (
            <article
              className="flex flex-col justify-between flex-1 group border border-gray-300 hover:shadow-lg rounded-lg overflow-hidden transition-shadow"
              role="none"
              key={index}
            >
              <a href="#" className="flex flex-col justify-between h-full p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-1 sm:mr-2">
                    <h1 className="text-gray-900 font-semibold text-lg mb-2">
                      {item.title}
                    </h1>
                    <p className="text-gray-700 text-sm mb-2 break-words">
                      {item.content}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserData;
