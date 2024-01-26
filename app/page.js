"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = <h2 className="text-center text-xl mt-10">No Task Avaliable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between my-1">
          <div className="flex justify-between  mx-5 ms-10 my-2 w-2/4">
            <h5 className="text-xl ">{t.title}</h5>
            <h6 className="text-xl text-start ">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-1 me-16 rounded fon-bold">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="w-2/3 border-4">
        <h1 className=" p-5 text-5xl text-center font-bold bg-black text-white">
          Sahil's Todo List
        </h1>

        <div className="flex justify-center">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="border-gray-950 border-2 m-5 text-2xl p-2 rounded-3xl"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />

            <input
              type="text"
              className="border-gray-950 border-2 m-5 text-2xl p-2 rounded-3xl"
              placeholder="Enter description here"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />

            <button className="bg-black text-white text-xl  rounded-3xl border-spacing-4 p-2">
              Add Task
            </button>
          </form>
          <hr />
        </div>
        <div className=" py-4 bg-slate-300">
          <div className=" flex justify-between font-bold text-2xl mx-5 ms-10 my-2 w-2/4">
          <ul>Task</ul>
          <ul>Description</ul>
          </div>
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
