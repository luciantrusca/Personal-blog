export default function Sidebar({tags}){
    return (
       <aside> {/* Sidebar */}
            <nav>
                {/* Quest log section */}
                <section>
                    <h1>Quest log</h1>
                    <ul> {/* Vertical list of elements */}
                        <li>
                            <img src={""}></img>
                            <span>About</span>
                        </li>
                        <li>
                            <img src={""}></img>
                            <span>Contact</span>
                        </li>
                    </ul>
                </section>
                {/* Tags section */}
                <section>
                <h1>Tags</h1>
                <ul>
                    {tags.map (tag => (
                        <li>{tag.name}</li>
                    ))}
                    {/* TODO: Dynamically fill in with first 7 tags from DB */}
                    {/*
                        <li>
                            <img src={""}></img>
                            <span>Contact</span>
                        </li>
                    */}
                </ul>
                </section>
            </nav>
        </aside>
    )
}