import { LayoutDashboard, ClipboardList, Calendar, FileText, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ClipboardList, label: 'Task Management', active: false },
    { icon: Calendar, label: 'Calendar', active: false },
    { icon: FileText, label: 'Report', active: false },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-blue-100 flex flex-col p-6 sticky top-0">
      

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
              item.active 
                ? 'bg-blue-50 text-blue-600 font-semibold' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-500 transition-colors">
        <LogOut size={20} />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;