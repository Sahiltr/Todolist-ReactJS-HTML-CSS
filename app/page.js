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
            className="bg-green-400 text-white
            border border-solid border-black px-4 py-1 me-8 rounded fon-bold">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className=" w-2.5/5 border-4 border-solid border-black  mt-32">
        <h1 className=" p-5 text-3xl text-center font-bold bg-slate-800 text-white">
          My Todo List
        </h1>

        <div className="flex justify-center bg-slate-400">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="border-gray-950 border-2 m-5  p-2 rounded-3xl"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />

            <input
              type="text"
              className="border-gray-950 border-2 m-5  p-2 rounded-3xl"
              placeholder="Enter description here"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />

            <button className="bg-black text-white  rounded-3xl border-spacing-4 me-4 p-2">
              Add Task
            </button>
          </form>
          <hr />
        </div>

        <div className=" py-4 bg-slate-300">
          <div className=" flex justify-between font-semi-bold text-xl px-10  my-2 border-b-2 border-t-2">
          <ul>Task</ul>
          <ul>Description</ul>
          <ul>Remove</ul>
          </div>
          <ul>{renderTask}</ul>
        </div>

      </div>
    </>
  );
};

export default page;
