export default function GroupTab() {

  return (

    <section className="mt-20">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">Tab</label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option defaultChecked>For students</option>
          <option>For tutors</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex gap-0 bg-zinc-200 rounded-3xl w-64 mx-auto" aria-label="Tabs">
          <button
            className="p-2 text-normal font-medium hover:bg-blue-300 px-4 py-2 w-1/2 text-center rounded-3xl"
          >
            For students
          </button>

          <button
            className="p-2 text-normal font-medium hover:bg-blue-300 px-4 py-2 w-1/2 text-center rounded-3xl"
          >
            For tutors
          </button>
        </nav>
      </div>
    </section>
  )
}
