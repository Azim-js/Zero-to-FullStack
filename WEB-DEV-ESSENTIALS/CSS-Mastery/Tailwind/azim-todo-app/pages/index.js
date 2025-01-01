import Profile from "@/components/Profile";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-dense gap-5 w-1/2 mx-auto">
        <button className="btn btn--primary col-span-2">Create New Todo</button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="btn"
        >
          Change Theme
        </button>
        <button className="btn">ABC</button>
        <button className="btn col-start-3">This ONE</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
        <button className="btn">ABC</button>
      </div>
    </div>
  );
}
