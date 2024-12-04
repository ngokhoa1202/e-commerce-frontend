import {SyntheticEvent } from "react";
import { UserRole } from "../page";

export default function GroupTab(
  {props}: {
    props: {
      onChangeUserRole: (e: SyntheticEvent<HTMLButtonElement>) => void,
      currentUserRole: UserRole
    }
  }
): JSX.Element {
  
  const buttonClassname: string = "text-normal font-medium px-4 py-2 w-1/2 text-center rounded-3xl ";
  const selectedButtonClassname: string = "bg-zinc-500 text-gray-200";
  const unselectedButtonClassname: string = "hover:bg-zinc-500 active:bg-zinc-500 hover:text-gray-200 active:text-gray-200";
  
  
  return (

    <section className="mt-20">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">Tab</label>

        <select id="Tab" className="w-full rounded-md border-gray-200" >
          <option defaultChecked value="Parent">For students</option>
          <option value="Tutor">For tutors</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex bg-zinc-200 rounded-3xl w-64 mx-auto" aria-label="Tabs">
          
          <button
            className={(props.currentUserRole === UserRole.Parent) ? (buttonClassname + selectedButtonClassname) 
              : buttonClassname + unselectedButtonClassname}
            value={UserRole.Parent}
            onClick={(e) => props.onChangeUserRole(e)}
          >
            For students
          </button>

          <button
            className={(props.currentUserRole === UserRole.Tutor) ? (buttonClassname + selectedButtonClassname) 
              : buttonClassname + unselectedButtonClassname}
            value={UserRole.Tutor}
            onClick={(e) => props.onChangeUserRole(e)}
          >
            For tutors
          </button>
        </nav>
      </div>
    </section>
  )
}
