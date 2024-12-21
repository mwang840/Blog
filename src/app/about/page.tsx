export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10">
      <h1 className="text-5xl">Who am I?</h1>
      <div className="border-2 border-indigo-600 shadow-lg shadow-cyan-500/50 bg-cyan-500">
        <h2 className="text-2xl text-center">About Me</h2>
        <p className="px-5">Welcome! Thank you for stumbling upon this page!</p>
        <p className="px-5"> I&apos;m Max, a junior software engineer!</p>
        <p className="px-5">
          On here this site is a less presentable site where I talk about what I
          have been up to lately.
        </p>
        <p className="px-5">
          This can range from learning new things, posting food or just rant
          about bad Spurs performance is in the league. Or just how much I want
          to travel.
        </p>
      </div>
      <div className="border-2 border-indigo-600 shadow-lg shadow-cyan-500/50 bg-cyan-500">
        <h2 className="text-2xl text-center">Why did I start this?</h2>
        <p className="px-5">I started this for a couple of reasons.</p>
        <ul className="px-5 list-decimal">
          <li>To learn how to make a blog </li>
          <li>Learning how to make posts within a JavaScript framework</li>
          <li>Also getting to post stuff what interests me the most!</li>
        </ul>
      </div>
      <div className="border-2 border-indigo-600 shadow-lg shadow-cyan-500/50 bg-cyan-500">
        <h2 className="text-2xl text-center">What to Expect</h2>
        <p className="px-5">
          Regular Posts whether it is coding, ranting about spurs not winning a
          trophy <i>again</i>, chess games that I usually play online or even
          reviewing recent hikes that I have done.
        </p>
        <p>
          The frequency of the posts can be daily, weekly, or monthly, depending
          on my schedule.
        </p>
      </div>
    </main>
  );
}
