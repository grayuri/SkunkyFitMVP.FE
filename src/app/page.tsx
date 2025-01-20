import Link from "next/link";

import Button from "@/components/UI/Button/Button";
import './home.scss';

export default function Home() {
  return (
    <main className="home">
      <Link href="lab">
        <Button>Go to lab</Button>
      </Link>
    </main>
  );
}
