interface SidebarItem {
  icon?: string;        // Optional icon name (or JSX element if more flexible)
  label: string;        // Text to display
  href?: string;        // Optional link
}

interface SidebarSectionProps {
  title: string;            // "Quest Log", "Latest Posts", etc.
  items: SidebarItem[];     // The list of items under this section
  className?: string[];
}


export default async function SidebarSection({title,items,className}: SidebarSectionProps) {
    return (
        <div className={`flex flex-col bg-amber-200 border-2 border-[#006629] ${className?.join(" ")}`}>
            <h1>{title}</h1>
            {items.map(item => {
                return (
                    <div key={item.label} className="flex items-center gap-2 p-2">
                        <img src={item?.icon} className="w-4 h-4" alt="" />
                        <span>{item.label}</span>
                    </div>
                );
            })}
        </div>
    )
}