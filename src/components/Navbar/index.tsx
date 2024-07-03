import Image from "next/image";

export default function NavigationBar() {
    return (
        <nav className="mx-32 flex items-center gap-16">
            <Image
                src={"/andrew-logo.png"}
                alt="Main Logo"
                width={100}
                height={100}
                className="w-12"
            />
            <span className="flex gap-16 list-none font-medium">
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
            </span>
        </nav>
    )
}