import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Pagination } from "@mui/material";
import AlertCard from "../components/AlertCard";
import HistoryCard from "../components/HistoryCard";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { firestore } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const flags = {
  UK: "/uk.svg",
  UAE: "/uae.png",
};

const Dashboard = () => {
  const { signout, user } = useAuth();
  const [allPreviousAlerts, setAllPreviousAlerts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [displayAlerts, setDisplayAlerts] = useState([]);

  const changeDisplayAlerts = (allAlerts) => {
    if (pageCount > 0) {
      const start = 4 * (page - 1);
      const end = 4 * page;
      const toDisplay = allAlerts?.slice(start, end);
      setDisplayAlerts(toDisplay);
    }
  };

  const updatePreviousAlerts = (newAlert) => {
    const newlen =
      Math.floor((allPreviousAlerts?.length + 1) / 4) +
      ((allPreviousAlerts?.length + 1) % 4 > 0 ? 1 : 0);
    const newAlerts = [...allPreviousAlerts, newAlert];
    setAllPreviousAlerts(newAlerts);
    setPageCount(newlen);
    if (page === 0) setPage(1);
    else if (newlen === 1) changeDisplayAlerts(newAlerts);
  };

  const getUserAlerts = async (userId) => {
    const docRef = doc(firestore, "users", userId);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const total = docSnap.data().alerts?.length;
        const pages = Math.floor(total / 4) + (total % 4 > 0 ? 1 : 0);
        setPageCount(pages);
        setAllPreviousAlerts(docSnap.data().alerts);
        if (pages > 0) setPage(1);
      } else {
        console.log("No such document found.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignout = async () => {
    await signout();
  };

  useEffect(() => {
    if (user?.uid) {
      getUserAlerts(user.uid);
    }
  }, [user]);

  useEffect(() => {
    changeDisplayAlerts(allPreviousAlerts);
  }, [page]);

  return (
    <div className="bg-black py-12 flex justify-center min-h-screen">
      <div className="w-2/5 flex items-center flex-col gap-24">
        <div className="flex justify-between items-center w-full">
          <p className="text-white font-bold">Hello, {user?.displayName}</p>
          <button
            onClick={handleSignout}
            className="bg-primary px-5 py-2 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B]"
          >
            Sign out
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <p className="text-white text-4xl text-center">
            Rate alert dashboard
          </p>
          <HistoryCard
            userID={user?.uid ?? null}
            updateAlerts={updatePreviousAlerts}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          {allPreviousAlerts?.length === 0 ? (
            "No Alerts Set"
          ) : (
            <>
              <div className="flex justify-between items-center w-full">
                <p className="text-white text-lg font-bold opacity-75">
                  Previous alerts
                </p>
                <Pagination
                  count={pageCount}
                  page={page}
                  color="secondary"
                  onChange={(event, value) => setPage(value)}
                  boundaryCount={1}
                  siblingCount={1}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white", // Ensures font color is white for all items
                    },
                    "& .MuiPaginationItem-previousNext": {
                      color: "white", // Sets the color of previous/next icons
                    },
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                {displayAlerts?.map((item) => (
                  <AlertCard
                    key={item.title}
                    name={item.title}
                    rate={item.rateValue}
                    date={item.setDate}
                    currency={item.currency}
                    country={item.country}
                    flag={flags[item.country]}
                  />
                ))}
                {/* <AlertCard
                  name="Name"
                  rate={84}
                  date={""}
                  currency={`£(GBP)`}
                  country="UK"
                  flag={"/uk.svg"}
                /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
