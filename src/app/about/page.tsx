export default function SobreMim() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6 px-4">
      <h1 className="text-6xl font-extrabold text-pink-400 max-sm:text-4xl animate-pulse">
        🚧 In Construction
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-md">
        This page is under development. Check back soon for more updates!
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="/"
          className="text-pink-400 font-semibold hover:text-pink-500 transition"
        >
          Go Home
        </a>
        <a
          href="mailto:pricilaoliveiras21@gmail.com"
          className="text-zinc-900 dark:text-zinc-100 font-semibold hover:text-pink-400 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
