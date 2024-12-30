import { SyntheticEvent } from 'react';
import { UserRole } from '@/constants';

export default function GroupTab(
  { props }: {
    props: {
      onChangeUserRole: (e: SyntheticEvent<HTMLButtonElement>) => void,
      currentUserRole: UserRole
    }
  }
) {
  const buttonClassname: string = 'text-normal font-medium px-4 py-2 w-1/2 text-center rounded-3xl ';
  const selectedButtonClassname: string = 'bg-zinc-500 text-gray-200';
  const unselectedButtonClassname: string = 'hover:bg-zinc-500 active:bg-zinc-500 hover:text-gray-200 active:text-gray-200';

  return (

    <section className="mt-20">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">Tab</label>

        <select id="Tab" className="w-full rounded-md border-gray-200" >
          <option defaultChecked value="STUDENT">For students</option>
          <option value="TUTOR">For tutors</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex bg-zinc-200 rounded-3xl w-64 mx-auto" aria-label="Tabs">
          <button
            className={(props.currentUserRole === UserRole.Student) ? (buttonClassname + selectedButtonClassname) 
              : buttonClassname + unselectedButtonClassname}
            value={UserRole.Student}
            onClick={(e) => props.onChangeUserRole(e)}
            type="button"
          >
            For students
          </button>

          <button
            className={(props.currentUserRole === UserRole.Tutor) ? (buttonClassname + selectedButtonClassname) 
              : buttonClassname + unselectedButtonClassname}
            value={UserRole.Tutor}
            onClick={(e) => props.onChangeUserRole(e)}
            type="button"
          >
            For tutors
          </button>
        </nav>
      </div>
    </section>
  )
}
