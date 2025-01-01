
const Header = () => {
    return (
        <div
            className="bg-cover bg-center text-white p-10 bg-black flex flex-col items-center rounded-2xl"
            style={{
                backgroundImage: "url('/assets/bg-shadow.png')",
            }}
        >
            <div className="flex justify-center items-center w-full">
                <img src="/public/assets/banner-main.png" alt="Banner" />
            </div>
            <h6 className="footer-title mt-4">Assemble Your Ultimate Dream 11 Cricket Team</h6>
            <h1 className="text-xl mt-2">Beyond Boundaries Beyond Limits</h1>
            <button className="btn bg-yellow-400 mt-4">Claim Free Credit</button>
        </div>
    );
};

export default Header;

