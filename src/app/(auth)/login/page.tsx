"use client";

export default function Login() {
    return <div className="flex flex-col justify-center items-center px-5 py-10 w-75 h-75 mt-20 mx-auto rounded-md border border-black shadow shadow-black">
        <span className="font-bold text-2xl text-black">Login</span>
        <form method="POST" action="/api/login">
            <input id="email" name="email" className="rounded-full mt-5 p-2 border border-black w-full" placeholder="Email"></input>
            <input id="password" name="password" type="password" className="rounded-full mt-5 p-2 border border-black w-full" placeholder="Password"></input>
            <button type="submit" className="btn btn-secondary bg-black text-white mt-10 w-full rounded-full p-2 cursor-pointer">Submit</button>
        </form>
    </div>
}