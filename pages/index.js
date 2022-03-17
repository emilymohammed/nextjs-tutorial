import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World. Testv2
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
