import Link from "next/link";
export default function NotFound() {
  return (
    <main>
      <section className="w-full h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold font-ethn mb-4">You seem Lost</h1>
        <p className="text-xl mb-8">The page you are looking for does not exist. If you think this is an error, please contact us<Link href="mailto:Nawwaf.husain@proviaacademy.com" className="underline font-bold">here</Link>.</p>
        <Link href="/" className="bg-white px-4 py-2  font-ethn text-black">back to the home</Link>
      </section>
    </main>
  );
}
