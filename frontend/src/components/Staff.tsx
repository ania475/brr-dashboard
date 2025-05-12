import { Staff } from "../types";

const StaffComponent: React.FC<Staff> = ({
  id,
  name,
  role,
  email,
  status,
  lastLogin,
  driveUsage,
  photo,
  joinedDate,
}) => {
  console.log("photo", photo);
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white mt-6 shadow-lg ">
      <div className="grid grid-cols-2 gap-1">
        <div id="col-2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{email}</p>
          </div>
        </div>
        <div id="col-1">
          <img
            className="rounded-full m:w-20 sm:w-20 xs:w-10 float-right mr-5 mt-2"
            src={photo}
            alt="staff-pic"
          />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          More information
        </span>
        <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href={`mailto:${email}?body=My custom mail body`}>
            Say hi to our new joiner! 👋
          </a>
        </span>
      </div>
    </div>
  );
};

export default StaffComponent;
