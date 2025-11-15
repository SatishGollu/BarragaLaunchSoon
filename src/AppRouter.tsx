import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@components/common/ErrorBoundary";
import Loading from "@components/common/Loading";
import {
  HomePage,
  FloatingRibbonPage,
  AboutPage,
  ContactPage,
  VisionPage,
} from "./pages";

const AppRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense
          fallback={<Loading fullScreen message="Loading BARRAḠA..." />}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ribbon" element={<FloatingRibbonPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vision" element={<VisionPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRouter;
