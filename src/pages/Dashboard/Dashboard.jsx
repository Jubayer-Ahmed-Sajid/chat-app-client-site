
const Dashboard = () => {
    return (
            <div className="flex h-screen">
                <div className=" w-1/3 bg-secondary">
                    <h1>Contacts</h1>
                </div>
                <div className="w-2/3 flex flex-col bg-primary">
                    <h1 className="flex-grow">Messages</h1>
                    <div className="flex items-center gap-2 m-2">
                        <input type="text" placeholder="Enter your message" className="flex-grow p-2 rounded-sm" name="" id="" />
                        <button className="bg-green-300 px-3 py-2 rounded-sm text-white">Send</button>
                    </div>
                </div>
            </div>

    );
};

export default Dashboard;