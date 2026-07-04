import { Home, ErrorPage, Game, LeaderBoard } from "./pages/index.js";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageLayout } from "./components";

function App() {
    const { pathname } = useLocation();
    const isGamePage = pathname === "/game";

    return (
        <PageLayout
            layoutClassName={isGamePage ? "app-layout-game" : ""}
            pageClassName={isGamePage ? "app-page-game" : ""}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;
