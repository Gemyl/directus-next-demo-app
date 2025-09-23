"use client";

export default function Login() {
    return <div className="flex flex-col justify-center items-center px-5 py-10 w-50 h-75 mt-20 mx-auto rounded-md border border-gray-400 shadow shadow-black">
        <span className="font-bold text-2xl text-black mb-3">Login</span>
        <form method="POST" action="/api/login">
            <input id="email" name="email" className="rounded-full mt-2 p-2 border border-gray-400 w-full outline-none" placeholder="Email"></input>
            <input id="password" name="password" type="password" className="rounded-full mt-2 p-2 border border-gray-400 w-full outline-none" placeholder="Password"></input>
            <button type="submit" className="btn btn-secondary bg-black text-white mt-5 w-full rounded-pill">Submit</button>
        </form>
    </div>
}