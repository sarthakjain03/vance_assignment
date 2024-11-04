import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import AlertCard from "../components/AlertCard"
import HistoryCard from "../components/HistoryCard"
import { useAuth } from "../contexts/AuthContext"

const Dashboard = () => {
    const { signout, user } = useAuth();

    const handleSignout = async () => {
        await signout();
    }

  return (
    <div className="bg-black py-12 flex justify-center min-h-screen">
        <div className="w-2/5 flex items-center flex-col gap-24">
            <div className="flex justify-between items-center w-full">
                <p className="text-white font-bold">Hello, {user?.displayName}</p>
                <button onClick={handleSignout} className="bg-primary px-5 py-2 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B]">
                    Sign out
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-12 w-full">
                <p className="text-white text-4xl text-center">
                    Rate alert dashboard
                </p>
                <HistoryCard userID={user?.uid ?? null} />
            </div>
            <div className="flex flex-col justify-center items-center gap-12 w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="text-white text-lg font-bold opacity-75">
                        Previous alerts
                    </p>
                    <div className="flex justify-center items-center gap-2">
                        <button>
                            <KeyboardArrowLeft sx={{ color: 'white' }} />
                        </button>
                        <button className="py-3 px-4 bg-[#7265EE] font-semibold text-xs text-white rounded-lg">
                            1
                        </button>
                        <button className="py-3 px-4 hover:bg-[#7265EE] font-semibold text-xs text-white rounded-lg">
                            2
                        </button>
                        <button className="py-3 px-4 font-semibold text-xs text-white rounded-lg">
                            ...
                        </button>
                        <button className="py-3 px-4 hover:bg-[#7265EE] font-semibold text-xs text-white rounded-lg">
                            10
                        </button>
                        <button>
                            <KeyboardArrowRight sx={{ color: 'white' }} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <AlertCard name="Name" rate={84} date={""} code={`£(GBP)`} country="UK" flag={"/uk.svg"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard