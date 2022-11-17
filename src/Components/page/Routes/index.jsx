import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MainPage } from "../MainPage";
import { Podcast } from "../Podcast";
import { EpisodeDetails } from "../EpisodeDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/podcast/:podcastId" element={<Podcast />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeDetails />}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
