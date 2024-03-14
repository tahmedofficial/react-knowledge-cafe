import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between m-4 p-3 border-b-2 max-w-7xl mx-auto">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;