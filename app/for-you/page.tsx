import ForYouClient from "./ForYouClient";

async function wait() {
  await new Promise(r => setTimeout(r, 2000));
}

export default async function Page() {

  await wait();   // ← fake server delay

  return <ForYouClient />;
}