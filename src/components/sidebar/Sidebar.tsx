import type {Tag} from "../../../generated/prisma/client";
import ParchmentSpacer from "../misc/ParchmentSpacer";
import SidebarSection from "./SidebarSection";
import {PrismaClient} from "~/generated/prisma/client";

const questlogItems = [
    { icon: "icons/medieval_compass Background Removed.png", label: "About", href: "/quest/1" },
    { icon: "/icons/medieval_feather.png", label: "Contact", href: "/quest/2" },
];

const prisma = new PrismaClient();

export default async function Sidebar() {
    const tags = await prisma.tag.findMany();
    // Map tags to SidebarItem[] interface
    const tagItems = tags.map(tag => ({
        label: tag.name,
        // href: `/tags/${tag.id}`,
        icon: tag.url || "icons/default_tag_icon.png", // Fallback icon if tag.url is null
    }));

    return (
       <aside className=""> {/* Sidebar */}
            <nav className="w-64 max-w-45 min-w-35 flex flex-col h-full ">
                <SidebarSection className={[""]} title="Quest Log" items={questlogItems}/>
                <SidebarSection className={[""]} title="Tags" items={tagItems}/>
                <ParchmentSpacer className="h-full bg-amber-200 border-[#006629] border-2"/>
            </nav>
        </aside>
    )
}



// Quest log section
// <section>
//     <h1>Quest log</h1>
//     <ul> 
//         {/* Vertical list of elements */}
//         <li>
//             <img src={"null"}></img>
//             <span>About</span>
//         </li>
//         <li>
//             <img src={"null"}></img>
//             <span>Contact</span>
//         </li>
//     </ul>
// </section>
// {/* Tags section */}
// <section>
//     <h1>Tags</h1>
//     <ul>
//         {tags.map(tag => (
//             <li key={tag.id}>{tag.name}</li>
//         ))}
//     </ul>
// </section>