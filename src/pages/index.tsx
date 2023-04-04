import Head from 'next/head'
import CounterClock from "@/components/CounterClock";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>25-5 Clock</title>
        <meta name="description" content="Yet another fcc app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-ubuntu text-white bg-[#0B2447] w-screen h-screen">
        <CounterClock />
      </main>
    </>
  )
}
