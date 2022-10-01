import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const auth = trpc.useQuery(["auth.getSession"]); 

  const onCreateTodo = (todo) => {
    if(!auth.data) {
      return alert("ログインして😢")
    }
    // 
  }

  if(!auth.data) {
    return (
      <>
        <Head>
          <title>todo app 🍺</title>
          <meta name="description" content="manage todo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto grid grid-flow-col grid-cols-2 min-h-screen p-4">
          <div className="flex items-center justify-center text-4xl font-medium font-mono">
            todo app 🍺
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="button" 
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              onClick={() => signIn()}
              >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              Sign in with Discord
            </button>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Welcome {auth.data.user.name}</title>
        <meta name="description" content="manage todo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto grid grid-flow-col grid-cols-2 min-h-screen p-4">
        <div className="flex items-center justify-center text-4xl font-medium font-mono">
          <div className="flex flex-col items-center gap-10">
            <div>todo app 🍺</div>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={auth.data.user.image || ""} alt={auth.data.user.name || "user image"}  className="rounded-full shadow" />
            <button 
              type="button" 
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              onClick={() => signOut()}
              >
              Sign out
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </button>
          </div>
        </div>
      </main>
      <main className="container mx-auto grid grid-flow-col grid-cols-2 min-h-screen p-4">
         <form
            className="flex items-center justify-center text-4xl font-medium font-mono gap-4" 
            onSubmit={e=>{
              e.preventDefault();
              onCreateTodo({});
            }}
          >
          <input 
            type="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" 
            placeholder="..." 
            required 
            />
            <button
              type="submit"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2"
            >
              🍺
            </button>
         </form>
      </main>
    </>
  );
};

export default Home;
