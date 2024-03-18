"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { logOut } from "@/redux/user/userSlice";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  console.log(params.courseId);

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout");

      dispatch(logOut());
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <aside
        class={`fixed top-0 left-0 z-40 w-52 sm:w-64  border h-screen transition-transform sm:translate-x-0 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 overflow-y-auto  bg-white flex flex-col justify-between">
          <ul class="flex flex-col gap-3 pb-3 font-medium">
            <li className="mx-3  py-3">
              <Link href="/">
                <Image
                  className="md:hidden h-auto w-auto"
                  width={100}
                  height={130}
                  src="/logo1.png"
                  alt="logo1"
                />

                <Image
                  className="md:block hidden h-auto w-auto"
                  width={110}
                  height={100}
                  src="/logo2.png"
                  alt="logo2"
                />
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-2 p-2  text-gray-900  rounded-lg bg-[#f0f8fc] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 64 64"
                  id="dashboard"
                >
                  <path
                    fill="#6B7280"
                    fill-rule="evenodd"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.286 8H20.714C21.9164 7.99999 22.8862 7.99998 23.6756 8.05384 24.4872 8.10922 25.205 8.22597 25.8846 8.50747 27.5181 9.1841 28.8159 10.4819 29.4925 12.1154 29.774 12.795 29.8908 13.5128 29.9462 14.3244 30 15.1138 30 16.0836 30 17.286V20.714C30 21.9164 30 22.8863 29.9462 23.6756 29.8908 24.4872 29.774 25.205 29.4925 25.8846 28.8159 27.5181 27.5181 28.8159 25.8846 29.4925 25.205 29.774 24.4872 29.8908 23.6756 29.9462 22.8862 30 21.9164 30 20.714 30H17.286C16.0836 30 15.1138 30 14.3244 29.9462 13.5128 29.8908 12.795 29.774 12.1154 29.4925 10.4819 28.8159 9.1841 27.5181 8.50747 25.8846 8.22597 25.205 8.10922 24.4872 8.05384 23.6756 7.99998 22.8862 7.99999 21.9164 8 20.714V17.286C7.99999 16.0836 7.99998 15.1138 8.05384 14.3244 8.10922 13.5128 8.22597 12.795 8.50747 12.1154 9.1841 10.4819 10.4819 9.1841 12.1154 8.50747 12.795 8.22597 13.5128 8.10922 14.3244 8.05384 15.1138 7.99998 16.0836 7.99999 17.286 8zM14.5059 10.7143C13.83 10.7604 13.4364 10.8467 13.1359 10.9711 12.1558 11.3771 11.3771 12.1558 10.9711 13.1359 10.8467 13.4364 10.7604 13.83 10.7143 14.5059 10.6674 15.1938 10.6667 16.0726 10.6667 17.3333V20.6667C10.6667 21.9274 10.6674 22.8062 10.7143 23.4941 10.7604 24.17 10.8467 24.5636 10.9711 24.8641 11.3771 25.8442 12.1558 26.6229 13.1359 27.0289 13.4364 27.1533 13.83 27.2396 14.5059 27.2857 15.1938 27.3326 16.0726 27.3333 17.3333 27.3333H20.6667C21.9274 27.3333 22.8062 27.3326 23.4941 27.2857 24.17 27.2396 24.5636 27.1533 24.8641 27.0289 25.8442 26.6229 26.6229 25.8442 27.0289 24.8641 27.1533 24.5636 27.2396 24.17 27.2857 23.4941 27.3326 22.8062 27.3333 21.9274 27.3333 20.6667V17.3333C27.3333 16.0726 27.3326 15.1938 27.2857 14.5059 27.2396 13.83 27.1533 13.4364 27.0289 13.1359 26.6229 12.1558 25.8442 11.3771 24.8641 10.9711 24.5636 10.8467 24.17 10.7604 23.4941 10.7143 22.8062 10.6674 21.9274 10.6667 20.6667 10.6667H17.3333C16.0726 10.6667 15.1938 10.6674 14.5059 10.7143zM17.286 34H20.714C21.9164 34 22.8862 34 23.6756 34.0538 24.4872 34.1092 25.205 34.226 25.8846 34.5075 27.5181 35.1841 28.8159 36.4819 29.4925 38.1154 29.774 38.795 29.8908 39.5128 29.9462 40.3244 30 41.1138 30 42.0836 30 43.286V46.714C30 47.9164 30 48.8863 29.9462 49.6756 29.8908 50.4872 29.774 51.205 29.4925 51.8846 28.8159 53.5181 27.5181 54.8159 25.8846 55.4925 25.205 55.774 24.4872 55.8908 23.6756 55.9462 22.8862 56 21.9164 56 20.714 56H17.286C16.0836 56 15.1138 56 14.3244 55.9462 13.5128 55.8908 12.795 55.774 12.1154 55.4925 10.4819 54.8159 9.1841 53.5181 8.50747 51.8846 8.22597 51.205 8.10922 50.4872 8.05384 49.6756 7.99998 48.8862 7.99999 47.9164 8 46.714V43.286C7.99999 42.0836 7.99998 41.1138 8.05384 40.3244 8.10922 39.5128 8.22597 38.795 8.50747 38.1154 9.1841 36.4819 10.4819 35.1841 12.1154 34.5075 12.795 34.226 13.5128 34.1092 14.3244 34.0538 15.1138 34 16.0836 34 17.286 34zM14.5059 36.7143C13.83 36.7604 13.4364 36.8467 13.1359 36.9711 12.1558 37.3771 11.3771 38.1558 10.9711 39.1359 10.8467 39.4364 10.7604 39.83 10.7143 40.5059 10.6674 41.1938 10.6667 42.0726 10.6667 43.3333V46.6667C10.6667 47.9274 10.6674 48.8062 10.7143 49.4941 10.7604 50.17 10.8467 50.5636 10.9711 50.8641 11.3771 51.8442 12.1558 52.6229 13.1359 53.0289 13.4364 53.1533 13.83 53.2396 14.5059 53.2857 15.1938 53.3326 16.0726 53.3333 17.3333 53.3333H20.6667C21.9274 53.3333 22.8062 53.3326 23.4941 53.2857 24.17 53.2396 24.5636 53.1533 24.8641 53.0289 25.8442 52.6229 26.6229 51.8442 27.0289 50.8641 27.1533 50.5636 27.2396 50.17 27.2857 49.4941 27.3326 48.8062 27.3333 47.9274 27.3333 46.6667V43.3333C27.3333 42.0726 27.3326 41.1938 27.2857 40.5059 27.2396 39.83 27.1533 39.4364 27.0289 39.1359 26.6229 38.1558 25.8442 37.3771 24.8641 36.9711 24.5636 36.8467 24.17 36.7604 23.4941 36.7143 22.8062 36.6674 21.9274 36.6667 20.6667 36.6667H17.3333C16.0726 36.6667 15.1938 36.6674 14.5059 36.7143zM43.286 8H46.714C47.9164 7.99999 48.8862 7.99998 49.6756 8.05384 50.4872 8.10922 51.205 8.22597 51.8846 8.50747 53.5181 9.1841 54.8159 10.4819 55.4925 12.1154 55.774 12.795 55.8908 13.5128 55.9462 14.3244 56 15.1138 56 16.0836 56 17.286V20.714C56 21.9164 56 22.8863 55.9462 23.6756 55.8908 24.4872 55.774 25.205 55.4925 25.8846 54.8159 27.5181 53.5181 28.8159 51.8846 29.4925 51.205 29.774 50.4872 29.8908 49.6756 29.9462 48.8862 30 47.9164 30 46.714 30H43.286C42.0836 30 41.1138 30 40.3244 29.9462 39.5128 29.8908 38.795 29.774 38.1154 29.4925 36.4819 28.8159 35.1841 27.5181 34.5075 25.8846 34.226 25.205 34.1092 24.4872 34.0538 23.6756 34 22.8862 34 21.9164 34 20.714V17.286C34 16.0836 34 15.1138 34.0538 14.3244 34.1092 13.5128 34.226 12.795 34.5075 12.1154 35.1841 10.4819 36.4819 9.1841 38.1154 8.50747 38.795 8.22597 39.5128 8.10922 40.3244 8.05384 41.1138 7.99998 42.0836 7.99999 43.286 8zM40.5059 10.7143C39.83 10.7604 39.4364 10.8467 39.1359 10.9711 38.1558 11.3771 37.3771 12.1558 36.9711 13.1359 36.8467 13.4364 36.7604 13.83 36.7143 14.5059 36.6674 15.1938 36.6667 16.0726 36.6667 17.3333V20.6667C36.6667 21.9274 36.6674 22.8062 36.7143 23.4941 36.7604 24.17 36.8467 24.5636 36.9711 24.8641 37.3771 25.8442 38.1558 26.6229 39.1359 27.0289 39.4364 27.1533 39.83 27.2396 40.5059 27.2857 41.1938 27.3326 42.0726 27.3333 43.3333 27.3333H46.6667C47.9274 27.3333 48.8062 27.3326 49.4941 27.2857 50.17 27.2396 50.5636 27.1533 50.8641 27.0289 51.8442 26.6229 52.6229 25.8442 53.0289 24.8641 53.1533 24.5636 53.2396 24.17 53.2857 23.4941 53.3326 22.8062 53.3333 21.9274 53.3333 20.6667V17.3333C53.3333 16.0726 53.3326 15.1938 53.2857 14.5059 53.2396 13.83 53.1533 13.4364 53.0289 13.1359 52.6229 12.1558 51.8442 11.3771 50.8641 10.9711 50.5636 10.8467 50.17 10.7604 49.4941 10.7143 48.8062 10.6674 47.9274 10.6667 46.6667 10.6667H43.3333C42.0726 10.6667 41.1938 10.6674 40.5059 10.7143zM43.286 34H46.714C47.9164 34 48.8862 34 49.6756 34.0538 50.4872 34.1092 51.205 34.226 51.8846 34.5075 53.5181 35.1841 54.8159 36.4819 55.4925 38.1154 55.774 38.795 55.8908 39.5128 55.9462 40.3244 56 41.1138 56 42.0836 56 43.286V46.714C56 47.9164 56 48.8863 55.9462 49.6756 55.8908 50.4872 55.774 51.205 55.4925 51.8846 54.8159 53.5181 53.5181 54.8159 51.8846 55.4925 51.205 55.774 50.4872 55.8908 49.6756 55.9462 48.8862 56 47.9164 56 46.714 56H43.286C42.0836 56 41.1138 56 40.3244 55.9462 39.5128 55.8908 38.795 55.774 38.1154 55.4925 36.4819 54.8159 35.1841 53.5181 34.5075 51.8846 34.226 51.205 34.1092 50.4872 34.0538 49.6756 34 48.8862 34 47.9164 34 46.714V43.286C34 42.0836 34 41.1138 34.0538 40.3244 34.1092 39.5128 34.226 38.795 34.5075 38.1154 35.1841 36.4819 36.4819 35.1841 38.1154 34.5075 38.795 34.226 39.5128 34.1092 40.3244 34.0538 41.1138 34 42.0836 34 43.286 34zM40.5059 36.7143C39.83 36.7604 39.4364 36.8467 39.1359 36.9711 38.1558 37.3771 37.3771 38.1558 36.9711 39.1359 36.8467 39.4364 36.7604 39.83 36.7143 40.5059 36.6674 41.1938 36.6667 42.0726 36.6667 43.3333V46.6667C36.6667 47.9274 36.6674 48.8062 36.7143 49.4941 36.7604 50.17 36.8467 50.5636 36.9711 50.8641 37.3771 51.8442 38.1558 52.6229 39.1359 53.0289 39.4364 53.1533 39.83 53.2396 40.5059 53.2857 41.1938 53.3326 42.0726 53.3333 43.3333 53.3333H46.6667C47.9274 53.3333 48.8062 53.3326 49.4941 53.2857 50.17 53.2396 50.5636 53.1533 50.8641 53.0289 51.8442 52.6229 52.6229 51.8442 53.0289 50.8641 53.1533 50.5636 53.2396 50.17 53.2857 49.4941 53.3326 48.8062 53.3333 47.9274 53.3333 46.6667V43.3333C53.3333 42.0726 53.3326 41.1938 53.2857 40.5059 53.2396 39.83 53.1533 39.4364 53.0289 39.1359 52.6229 38.1558 51.8442 37.3771 50.8641 36.9711 50.5636 36.8467 50.17 36.7604 49.4941 36.7143 48.8062 36.6674 47.9274 36.6667 46.6667 36.6667H43.3333C42.0726 36.6667 41.1938 36.6674 40.5059 36.7143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class=" text-[1rem]">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-2 p-2  text-gray-400  rounded-lg bg-[#f5fafe] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="earning-payouy"
                  className="w-7 h-7"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    strokeWidth="2"
                    d="M15.511,4.989V8.581a.5.5,0,0,1-1,0V6.2L5.343,15.364a.5.5,0,1,1-.707-.707L13.8,5.489H11.419a.5.5,0,0,1,0-1h3.592a.487.487,0,0,1,.191.039.5.5,0,0,1,.27.27A.487.487,0,0,1,15.511,4.989ZM4.514,6.8A2.284,2.284,0,1,1,6.8,9.081,2.285,2.285,0,0,1,4.514,6.8Zm1,0A1.284,1.284,0,1,0,6.8,5.514,1.285,1.285,0,0,0,5.514,6.8ZM15.486,13.2A2.284,2.284,0,1,1,13.2,10.919,2.285,2.285,0,0,1,15.486,13.2Zm-1,0A1.284,1.284,0,1,0,13.2,14.486,1.285,1.285,0,0,0,14.486,13.2Z"
                  ></path>
                </svg>
                <span class=" text-[1rem]">Refer And Earn</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-2 p-2  text-gray-900  rounded-lg bg-[#f0f8fc] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="#6B7280"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span class=" text-[1rem]">Certificates</span>
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="bg-[#f0f8fc] pb-4 flex flex-col items-center gap-2 justify-center rounded-lg">
              <img
                className="w-24 -mt-4"
                src="/exclusive.png"
                alt="exclusive"
              />
              <p className="font-medium text-center">
                <span className="text-[#8a8a8a]">Get The </span>
                <span className="text-[#336f9a]">All Access Pack</span>
                <br /> <span className="text-[#8a8a8a]"> Now</span>
              </p>
              <button className="bg-[#35A3E3] hover:bg-[#3592e3] border-2 border-[#d4efff] transition-all  rounded-full duration-300 delay-100 text-white text-md px-3 py-1">
                Get Now
              </button>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-3 p-2 bg-[#f0f8fc]  text-gray-900 rounded-lg   group"
              >
                <img className="w-10" src="/user.gif" alt="user" />

                <span class=" text-[1rem]">Sunny Pate...</span>
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 py-3 font-medium">
            <li
              onClick={logout}
              className="flex items-center gap-3 p-2 hover:cursor-pointer text-gray-900 rounded-lg  hover:bg-[#fde7ee] group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#525864"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>

              <span class=" text-[1rem]">Log Out</span>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64 ">
        {/* Head  */}
        <div className="flex items-center justify-between">
          <h1 className="text-[1.6rem] max-w-[230px] sm:max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap sm:text-2xl font-medium text-[#303030]">
            Hi, {currentUser?.name}
          </h1>
          <div className="hidden lg:flex border border-slate-300 px-3 lg:flex-1 lg:mx-10 rounded-sm gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#3b3b3b"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              className="border-none w-full outline-none py-2"
              type="text"
              placeholder="Search For Enrolled Cours..."
            ></input>
          </div>
          <div className=" px-2 py-2 rounded-lg sm:block hidden  bg-[#e2f5ff]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <button
            onClick={handleSidebar}
            type="button"
            class="inline-flex items-center text-sm sm:hidden text-gray-500 rounded-lg  outline-none"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex lg:hidden mt-2 border border-slate-300 px-3 lg:flex-1 lg:mx-10 rounded-sm gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#3b3b3b"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="border-none w-full outline-none py-2"
            type="text"
            placeholder="Search For Enrolled Cours..."
          ></input>
        </div>
        {/* Enrolled Courses  */}
        <div className="pb-6 pt-4 md:pb-6 md:pt-6">
          <h1 className="text-[1.3rem] sm:text-2xl font-bold text-[#494949]">
            Enrolled Courses
          </h1>
          <select className="block xl:hidden bg-[#e2f5ff] text-black rounded w-52 px-3 py-2 outline-none border-none my-10">
            <option value="All Courses">All (1)</option>
            <option value="All Courses">In-Progress (1)</option>
            <option value="All Courses">Completed (1)</option>
          </select>
          <ul className="xl:flex hidden  py-5 gap-4">
            <li className="py-2 px-4 font-medium bg-[#e2f5ff] rounded-full">
              All (1)
            </li>
            <li className="py-2 px-4 font-medium bg-[#e2f5ff] rounded-full">
              In-Progress (1)
            </li>
            <li className="py-2 px-4 font-medium bg-[#e2f5ff] rounded-full">
              Completed (1)
            </li>
          </ul>
        </div>

        {/* // courses subscribed  */}
        <div className="flex gap-10 flex-wrap ">
          {currentUser?.courses.map((item, index) => (
            <div className="bg-white rounded-xl overflow-hidden border">
              <img
                className="w-[300px] h-[130px] object-cover"
                src={item.img1}
              />
              <div className="flex flex-col border px-4">
                <div className="flex flex-col py-2">
                  <div className="flex  items-center gap-2">
                    <div className="w-full  h-2 rounded-full bg-teal-500"></div>
                    <h4 className="text-sm font-semibold text-[#2a2a2a]">
                      100%
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-teal-500">
                    189 / 189 Videos Completed
                  </p>
                </div>
                <h2 className="text-[1.14rem] font-semibold">{item.name}</h2>
                <div className=" text-[0.68rem] flex flex-col gap-2 font-medium text-gray-800 py-2">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                    Last Read: How Internet Works
                  </div>
                  <div className="flex gap-2 py-1 px-2 w-fit rounded-md text-[0.76rem] border border-dashed border-[#FD7289] text-[#FD7289] font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    Enrolled On 06-07-2023
                  </div>
                </div>
                <hr className="my-1" />
                <a
                  href={`dashboard/screen/${item.name + "/" + item._id}`}
                  className="flex items-center justify-center bg-[#EAFCFF] outline-none rounded-2xl px-4 py-[0.13rem] my-2 text-[#1D98E0] font-semibold text-md"
                >
                  <img
                    className="w-10"
                    src="video_tutorials.png.webp"
                    alt="video_tut_icon"
                  />
                  <span className="mt-1">Resume Course</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
