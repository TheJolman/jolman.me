export default function TutoringPage() {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-5 text-center">
        <h1 className="my-5 font-bold text-xl">Tutoring</h1>
        <p className="inline">
          I do private math tutoring upon request. For availability, please
          reach out to me at&nbsp;
        </p>
        <a href="mailto:josh@jolman.me" className="text-blue-500 inline">
          josh@jolman.me
        </a>.
        <br />
        <h2 className="my-3 font-bold text-lg">Rates</h2>
        <p>
          My current rate is $25 for sessions not exceeding 1 hour, and $25/hour
          thereafter.
        </p>
        <h2 className="my-3 font-bold text-lg">Topics Offered</h2>
        <p>
          I tutor all topics found in K-12 math. For pre-calculus and higher, I
          require notice ahead of time so I can prepare.
        </p>
      </div>
    </>
  );
}
