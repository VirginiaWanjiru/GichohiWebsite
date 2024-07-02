import Navbar from "../../components/NavBar";

export default function Team(){
    return (
        <>
        <Navbar activeItem="About"/>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-6xl">Team Page</h1>
        </div>
        </>
    )
}