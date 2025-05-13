import Menu from "../../components/Menu/Menu";
import StaffComponent from "../../components/Staff/Staff";
import { useData } from "../../context/DataContext";
import { staffData } from "../../staffData/staff";

const StaffPage = () => {
  const { loading, error } = useData();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Menu />
      <div className="overflow-hidden bg-indigo-200 py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-5xl">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Staff
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  View information about all of the current staff. If they are a
                  new joiner, feel free to say hi by sending them a friendly
                  email!
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {error ? (
                <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                  Error loading data
                </div>
              ) : staffData.length > 0 ? (
                staffData.map((staff) => (
                  <>
                    <StaffComponent
                      key={staff.id}
                      id={staff.id}
                      name={staff.name}
                      photo={staff.photo}
                      email={staff.email}
                      role={staff.role}
                      joinedDate={staff.joinedDate}
                    />
                  </>
                ))
              ) : (
                <p>No staff members available to view right now.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
