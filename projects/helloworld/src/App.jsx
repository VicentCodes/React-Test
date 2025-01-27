import "./App.css";
import { XFollowCard } from "./XFollowCard";

export function App() {
  return (
    <>
      <XFollowCard
        isFollowing
        userName="Sara"
        userHandle="sara"
        avatar="sara"
      />
      <XFollowCard
        isFollowing={false}
        userName="Vicent"
        userHandle="vicentcodes"
        avatar="vicentcodes"
      />
    </>
  );
}
