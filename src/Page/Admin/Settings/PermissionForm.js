import React, { useState } from 'react';

function PermissionForm() {
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const permissions = [
    {
      id: 1,
      name: 'manage_roles_permission',
      slug: 'manage_roles_permission',
      description: 'roles&permission',
      created_at: null,
    },
    {
      id: 2,
      name: 'manage_admins',
      slug: 'manage_admins',
      description: 'roles&permission',
      created_at: null,
    },
    {
      id: 3,
      name: 'manage_depts',
      slug: 'manage_depts',
      description: 'roles&permission',
      created_at: null,
    },
    {
      id: 4,
      name: 'manage_branch',
      slug: 'manage_branch',
      description: 'roles&permission',
      created_at: null,
    },
    {
      id: 5,
      name: 'manage_leave_types',
      slug: 'manage_leave_types',
      description: 'roles&permission',
      created_at: null,
    },
  ];

  const handlePermissionChange = (permissionId) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(
        selectedPermissions.filter((id) => id !== permissionId)
      );
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected permissions:', selectedPermissions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="border border-gray-300 p-4 rounded-lg">
        <legend className="text-lg font-medium">Permissions:</legend>
        {permissions.map((permission) => (
          <div key={permission.id} className="flex items-center">
            <input
              type="checkbox"
              id={`permission-${permission.id}`}
              name={`permission-${permission.id}`}
              value={permission.id}
              checked={selectedPermissions.includes(permission.id)}
              onChange={() => handlePermissionChange(permission.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label
              htmlFor={`permission-${permission.id}`}
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              {permission.name}
            </label>
          </div>
        ))}
      </fieldset>
      <button
        type="submit"
        className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
