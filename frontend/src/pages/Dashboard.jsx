import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { User } from "../components/User";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Appbar */}
      <Appbar />

      {/* Main Section */}
      <div className="p-8 max-w-5xl mx-auto">
        {/* Balance Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <Balance value={"10,000"} />
        </div>

        {/* User Section */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <User />
        </div>
      </div>
    </div>
  );
}
