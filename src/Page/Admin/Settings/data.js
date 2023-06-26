export let data = [
  {
    id: 1,
    name: 'Example Inc.',
    admin: ['Jane Doe', 'Mark Johnson', 'Sarah Lee'],
    staff: ['Jane Doe', 'Mark Johnson', 'Sarah Lee'],
    branch: ['John Kim'],
  },
];

export const companyNav = [
  { id: 1, navname: 'Branch' },
  { id: 2, navname: 'Grades' },
  { id: 3, navname: 'Leave Types' },

  { id: 4, navname: 'Positions' },
  { id: 5, navname: 'Role' },

  { id: 6, navname: 'Permissions' },
  { id: 7, navname: 'Office Tools' },
  { id: 8, navname: 'Admin' },
  { id: 9, navname: 'Departments' },
];

export const companyAdmin = [
  {
    id: 1,
    name: 'samheart',
    img: 'https://www.maybev.com.sg/image/cache/catalog/Product/Product%20item/sake/King%20Whisky%20RIN%20_Alc%2037__-800x800.jpg',
    admin_type: 'admin',
    employee_id: 'ics12232',
    company: 'ics',
    email: 'samheart@scompany.com',
  },
];

export const CompanyGrade = [
  {
    id: 1,
    name: 'lead dev',
    leave: [
      { leave: 'exam', day: '40' },
      { leave: 'birth', day: '50' },
    ],
    salary: {
      MAX_Amount: '3000',
      MIN_Amount: '1000',
    },
  },

  {
    id: 2,
    name: 'lead dev',
    leave: [
      { leave: 'exam', day: '40' },
      { leave: 'birth', day: '50' },
      { leave: 'birth', day: '50' },
      { leave: 'birth', day: '50' },
    ],
    salary: {
      MAX_Amount: '3000',
      MIN_Amount: '1000',
    },
  },
];

export const permissions = [
  {
    roleName: 'Admin',
    description: 'Has full access to all features and functions',
    numAssignedUsers: 10,
  },
  {
    roleName: 'Manager',
    description: 'Has access to certain features and can manage team members',
    numAssignedUsers: 5,
  },
  {
    roleName: 'User',
    description: 'Has limited access to features and functions',
    numAssignedUsers: 100,
  },
];

export const permissionsTab = [
  { id: 1, name: 'Admin Dashboard' },
  { id: 2, name: 'Employee' },
  { id: 3, name: 'Engagement' },
  { id: 4, name: 'Leave' },
  { id: 5, name: 'Finance' },
  { id: 6, name: 'Recruitment' },
  { id: 7, name: 'Request' },
  { id: 8, name: 'Performance' },
];
