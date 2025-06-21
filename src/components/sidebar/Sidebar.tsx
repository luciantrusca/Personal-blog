import type {Tag} from "../../../generated/prisma/client";
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
       <aside className="w-64 grow"> {/* Sidebar */}
            <nav className="flex flex-col h-full">
                <SidebarSection className={["flex-1"]} title="Quest Log" items={questlogItems}/>
                <SidebarSection className={["flex-2"]} title="Tags" items={tagItems}/>
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