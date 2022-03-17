import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
