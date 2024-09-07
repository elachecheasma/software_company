"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAdmin) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex pt-16"> {/* Added padding to the top to account for the fixed Navbar */}
      <aside className="w-64 bg-gray-800 text-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Menu</h2>
        <ul>
          <li className="mb-2">
            <a href="/profile" className="block px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-700">
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="/settings" className="block px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-700">
              Settings
            </a>
          </li>
          <li className="mb-2">
            <a href="/manage-projects" className="block px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-700">
              Manage Projects
            </a>
          </li>
          <li className="mb-2">
            <a href="/team-overview" className="block px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-700">
              Team Overview
            </a>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex items-center space-x-4">
            <img
              src="/profile-placeholder.png"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-blue-600"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome, Admin!
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <ul className="list-disc list-inside">
            <li>Total Users: 1,234</li>
            <li>Active Projects: 56</li>
            <li>Pending Tasks: 23</li>
            <li>Recent Activities: 78</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">User ID</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Email</th>
                  <th className="px-4 py-2 border-b">Role</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{user.id}</td>
                    <td className="px-4 py-2 border-b">{user.name}</td>
                    <td className="px-4 py-2 border-b">{user.email}</td>
                    <td className="px-4 py-2 border-b">{user.role}</td>
                    <td className="px-4 py-2 border-b">{user.status}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-500 hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Project Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Project ID</th>
                  <th className="px-4 py-2 border-b">Title</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{project.id}</td>
                    <td className="px-4 py-2 border-b">{project.title}</td>
                    <td className="px-4 py-2 border-b">{project.status}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-500 hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Inactive"
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Moderator",
    status: "Active"
  }
];

const projects = [
  {
    id: "1",
    title: "Project Alpha",
    status: "In Progress"
  },
  {
    id: "2",
    title: "Project Beta",
    status: "Completed"
  },
  {
    id: "3",
    title: "Project Gamma",
    status: "Pending"
  }
];