import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="bg-stone-950 text-white h-20 flex items-center justify-between px-6">
        <div>
          <Link to="/">
            <span className="text-white">Home</span>
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to="/tickets">
            <span className="text-white">Tickets</span>
          </Link>
          <Link to="/todos">
            <span className="text-white">To-do List</span>
          </Link>
          <Link to="/staff">
            <span className="text-white">Staff Information</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
