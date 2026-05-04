import { LayoutDashboard, ClipboardList, Calendar, FileText, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ClipboardList, label: 'Task Management', active: false },
    { icon: Calendar, label: 'Calendar', active: false },
    { icon: FileText, label: 'Report', active: false },
  ];

  return (
    <>
     

      {/* Sidebar Container */}
      <div className={`
        fixed md:sticky top-0 left-0 z-50
        w-64 h-screen bg-white border-r border-slate-100 
        flex flex-col p-6 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        
        <button 
          onClick={onClose}
          className="md:hidden absolute right-4 top-6 p-2 text-slate-400 hover:text-slate-600"
        >
          <X size={20} />
        </button>

        
        <div className="mb-10 pt-2">
          <span className="text-xl font-bold text-indigo-600">HRD</span>
          <span className="text-xl font-bold text-slate-900"> Room</span>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                item.active 
                  ? 'bg-indigo-50 text-indigo-600 font-bold' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-50">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;