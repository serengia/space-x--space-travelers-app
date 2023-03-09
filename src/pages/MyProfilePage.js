import { useSelector } from "react-redux";
import s from "./MyProfilePage.module.scss";

function MyProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  const rocketsReserved = rockets.filter((roc) => roc.reserved === true);
  const missionsJoined = missions.filter((mission) => mission.join === true);

  let rocketsReservedLi;
  let missionsJoinedLi;

  if (rocketsReserved.length === 0) {
    rocketsReservedLi = (
      <p style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
        No reserved rocket to display.
      </p>
    );
  } else {
    rocketsReservedLi = rocketsReserved.map((r) => (
      <li key={r.id}>{r.rocket_name}</li>
    ));
  }

  if (missionsJoined.length === 0) {
    missionsJoinedLi = (
      <p style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
        No missions joined to display.
      </p>
    );
  } else {
    missionsJoinedLi = missionsJoined.map((m) => (
      <li key={m.mission_id}>{m.mission_name}</li>
    ));
  }

  return (
    <div className={s["profile-page"]}>
      <div className={`${s["profile-page-container"]} row`}>
        <div className={s["my-missions"]}>
          <h2 className={s["title"]}>My Missions</h2>
          <div className={s["booked-missions"]}>
            <ul>{missionsJoinedLi}</ul>
          </div>
        </div>
        <div className={s["my-rockets"]}>
          <h2 className={s["title"]}>My Rockets</h2>
          <div className={s["booked-rockets"]}>
            <ul>{rocketsReservedLi}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
