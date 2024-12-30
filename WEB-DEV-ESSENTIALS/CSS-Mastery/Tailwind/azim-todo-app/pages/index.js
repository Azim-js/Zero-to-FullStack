import Profile from "@/components/Profile";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <div className="flex gap-x-5">
        <button className="btn btn--primary">Create New Todo</button>
        <button className="btn">Help</button>
      </div>
    </div>
  );
}
