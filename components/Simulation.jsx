"use client";
import { useState, useCallback } from "react";
import { selectScenarios, selectProfile } from "@/lib/scenarios";
import { EMPTY_COSTS, addCosts } from "@/lib/costs";
import LandingScreen from "@/components/screens/LandingScreen";
import IdentityScreen from "@/components/screens/IdentityScreen";
import SceneScreen from "@/components/screens/SceneScreen";
import AccumulationScreen from "@/components/screens/AccumulationScreen";
import CostReportScreen from "@/components/screens/CostReportScreen";
import BridgeScreen from "@/components/screens/BridgeScreen";

export default function Simulation() {
  const [screen, setScreen] = useState("landing");
  const [profile, setProfile] = useState(null);
  const [scenes, setScenes] = useState([]);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [costs, setCosts] = useState(EMPTY_COSTS);

  const begin = useCallback(() => {
    setProfile(selectProfile());
    setScenes(selectScenarios());
    setSceneIndex(0);
    setCosts(EMPTY_COSTS);
    setScreen("identity");
  }, []);

  const startScenes = useCallback(() => setScreen("scene"), []);

  const handleChoice = useCallback(
    (choice) => {
      setCosts((prev) => addCosts(prev, choice.costs));
    },
    []
  );

  const advanceScene = useCallback(() => {
    if (sceneIndex + 1 >= scenes.length) {
      setScreen("accumulation");
    } else {
      setSceneIndex((i) => i + 1);
    }
  }, [sceneIndex, scenes.length]);

  const reset = useCallback(() => {
    setProfile(selectProfile());
    setScenes(selectScenarios());
    setSceneIndex(0);
    setCosts(EMPTY_COSTS);
    setScreen("identity");
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {screen === "landing" && <LandingScreen onBegin={begin} />}
      {screen === "identity" && profile && (
        <IdentityScreen profile={profile} onStart={startScenes} />
      )}
      {screen === "scene" && scenes[sceneIndex] && (
        <SceneScreen
          key={sceneIndex}
          scene={scenes[sceneIndex]}
          sceneIndex={sceneIndex}
          totalScenes={scenes.length}
          costs={costs}
          onChoice={handleChoice}
          onAdvance={advanceScene}
        />
      )}
      {screen === "accumulation" && (
        <AccumulationScreen onContinue={() => setScreen("report")} />
      )}
      {screen === "report" && (
        <CostReportScreen
          costs={costs}
          onContinue={() => setScreen("bridge")}
        />
      )}
      {screen === "bridge" && <BridgeScreen onReset={reset} />}
    </main>
  );
}
