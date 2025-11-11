import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@components/common/ErrorBoundary";
import Loading from "@components/common/Loading";
import { HomePage, FloatingRibbonPage } from "./pages";

const AppRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense
          fallback={<Loading fullScreen message="Loading Barraga..." />}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ribbon" element={<FloatingRibbonPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRouter;
