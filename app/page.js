"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    // console.log(title);
    // console.log(desc);
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <p className="text-lg font-medium">{t.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-black text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Champion Checklist
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 m-5 text-2xl rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
