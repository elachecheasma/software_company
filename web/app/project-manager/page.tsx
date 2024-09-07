"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProjectManager() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const data = [
    {
      title: "Project Alpha",
      status: "In Progress",
      teamMembers: 10,
      deadline: "2023-12-01",
      budgetUtilization: "50%",
      budget: "$100,000",
      timeline: "6 months",
      concept: "Develop a new feature",
      description: "This project involves developing a new feature for our main product."
    },
    {
      title: "Project Beta",
      status: "Completed",
      teamMembers: 8,
      deadline: "2023-06-15",
      budgetUtilization: "75%",
      budget: "$80,000",
      timeline: "4 months",
      concept: "Redesign the user interface",
      description: "This project involved redesigning the user interface to improve user experience."
    },
    {
      title: "Project Gamma",
      status: "Pending",
      teamMembers: 5,
      deadline: "2024-03-20",
      budgetUtilization: "30%",
      budget: "$50,000",
      timeline: "3 months",
      concept: "Conduct market research",
      description: "This project involves conducting market research to identify new opportunities."
    }
  ];

  useEffect(() => {
    const isProjectManager = localStorage.getItem('isProjectManagerAuthenticated') === 'true';
    if (!isProjectManager) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex pt-16">
      <aside className="w-64 bg-gray-800 text-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Project Manager Menu</h2>
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
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              alt="Project Manager Profile"
              width={96}
              height={96}
              className="rounded-full border-2 border-blue-600"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome, Project Manager!
              </h1>
              <p className="text-gray-600">Senior Project Manager</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Manager Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Project Overview" width={400} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
              <p className="text-gray-600">Quick overview of all ongoing projects and their statuses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Team Performance</h3>
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Team Performance" width={400} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
              <p className="text-gray-600">Visualize team productivity and performance metrics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Budget Allocation</h3>
              <Image src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Budget Allocation" width={400} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
              <p className="text-gray-600">Track budget allocation and utilization across projects.</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Current Projects</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Title</th>
                    <th className="px-4 py-2 border-b">Status</th>
                    <th className="px-4 py-2 border-b">Team Members</th>
                    <th className="px-4 py-2 border-b">Deadline</th>
                    <th className="px-4 py-2 border-b">Budget Utilization</th>
                    <th className="px-4 py-2 border-b">Budget</th>
                    <th className="px-4 py-2 border-b">Timeline</th>
                    <th className="px-4 py-2 border-b">Concept</th>
                    <th className="px-4 py-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border-b">{project.title}</td>
                      <td className="px-4 py-2 border-b">{project.status}</td>
                      <td className="px-4 py-2 border-b">{project.teamMembers}</td>
                      <td className="px-4 py-2 border-b">{project.deadline}</td>
                      <td className="px-4 py-2 border-b">{project.budgetUtilization}</td>
                      <td className="px-4 py-2 border-b">{project.budget}</td>
                      <td className="px-4 py-2 border-b">{project.timeline}</td>
                      <td className="px-4 py-2 border-b">{project.concept}</td>
                      <td className="px-4 py-2 border-b">{project.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}