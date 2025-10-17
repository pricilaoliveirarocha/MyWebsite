export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
      {/* Delicate emoji */}
      <div className="text-6xl animate-bounce text-pink-400">🌸</div>

      {/* Main title */}
      <h1 className="text-6xl font-extrabold max-sm:text-5xl text-zinc-900 dark:text-zinc-100">
        Page Not Found
      </h1>

      {/* Explanatory message */}
      <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-lg">
        Oops! Looks like this page wandered off… Let’s take you back to the homepage.
      </p>

      {/* Button to return */}
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-pink-400 text-white font-medium hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-600 transition-transform transform hover:scale-105 shadow-md"
      >
        Go Back Home
      </a>
    </div>
  );
}
