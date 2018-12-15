export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Modules'
  },
  {
    name: 'Employees',
    url: '/employee',
    icon: 'icon-drop',
    children: [
      {
        name: 'Create',
        url: '/home/employee/createemp',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/employee/listemp',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/employee/edit',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/employee/delete',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/employee/search',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Cutomers',
    url: '/cutomer',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Create',
        url: '/home/customer/addcustomer',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/customer/listcustomer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/customer/editcustomer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/customer/deletecustomer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/customer/findcustomer',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Inventory',
    url:'/inventory',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Create',
        url: '/home/inventory/createinventory',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/inventory/listinventory',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/inventory/editinventory',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/inventory/searchinventory',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/inventory/searchinventory',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Vendors',
    url:'/vendor',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Create',
        url: '/home/vendor/addvendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/vendor/listvendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/vendor/editvendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/vendor/searchvendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/vendor/searchvendor',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Sales',
    url: '/sales',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Create',
        url: '/home/sales/createsales',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/sales/listsales',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/sales/editsales',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/sales/findsales',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/sales/findsales',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Accounting',
    url: '/accounting',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Create',
        url: '/home/accounting/createaccount',
        icon: 'icon-puzzle'
      },
      {
        name: 'List(Read)',
        url: '/home/accounting/listaccount',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update',
        url: '/home/accounting/editaccount',
        icon: 'icon-puzzle'
      },
      {
        name: 'Delete',
        url: '/home/accounting/findaccount',
        icon: 'icon-puzzle'
      },
      {
        name: 'Search',
        url: '/home/accounting/findaccount',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'By Employees',
        url: '/home/reports/byemp',
        icon: 'icon-puzzle'
      },
      {
        name: 'By Customers',
        url: '/home/reports/bycustomer',
        icon: 'icon-puzzle'
      },
      {
        name: 'By Inventory',
        url: '/home/reports/byinventory',
        icon: 'icon-puzzle'
      },
      {
        name: 'By Vendors',
        url: '/home/reports/byvendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'By Sales',
        url: '/home/reports/bysales',
        icon: 'icon-puzzle'
      },
      {
        name: 'By Billings',
        url: '/home/reports/byaccount',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Logout',
    url: '/logout',
  }
];
