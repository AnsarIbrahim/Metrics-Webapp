import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const Next = () => (
  <>
    <div className="fixed flex h-full w-full items-center justify-between p-1 md:p-5 lg:p-1">
      <div
        className=" flex
       w-full justify-between"
      >
        <NavLink to="/home">
          <button type="button" className="text-white">
            <GrFormPreviousLink />
          </button>
        </NavLink>
        <NavLink to="/next">
          <button type="button">
            <GrFormNextLink />
          </button>
        </NavLink>
      </div>
    </div>
  </>
);

export default Next;
