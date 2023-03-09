import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions, missionsActions } from "../redux/missions/missionsSlice";
import s from "./MissionsPage.module.scss";

function MissionsPage() {
  const { missions } = useSelector((state) => state.missions);
  useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const joinMissionHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(missionsActions.joinMission({ id }));
  };

  const leaveMissionHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(missionsActions.leaveMission({ id }));
  };

  return (
    <div className={s["missions-page"]}>
      <table className={`${s["missions-container"]} row`}>
        <thead className={s["missions-header"]}>
          <th className={s["mission"]}>Mission</th>
          <th className={s["description"]}>Description</th>
          <th className={s["status"]}>Status</th>
        </thead>

        <tbody className={s["mission-row"]}>
          {missions.map((m) => (
            <tr key={m.mission_id}>
              <td>{m.mission_name}</td>
              <td>{m.description}</td>
              <td>
                <div className={s["status-actions"]}>
                  <div className={s["status-badge"]}>
                    {!m?.join && (
                      <span
                        className={`${s["member-badge"]} ${s["inactive-member-badge"]}`}
                      >
                        Not Member
                      </span>
                    )}
                    {m?.join && (
                      <span
                        className={`${s["member-badge"]} ${s["active-member-badge"]}`}
                      >
                        Active Member
                      </span>
                    )}
                  </div>
                  <div className={s["action-btns"]}>
                    {!m?.join && (
                      <button
                        type="button"
                        className={`${s["mission-btn"]} ${s["join-mission-btn"]} `}
                        onClick={joinMissionHandler}
                        data-id={m.mission_id}
                      >
                        Join Mission
                      </button>
                    )}
                    {m?.join && (
                      <button
                        type="button"
                        className={`${s["mission-btn"]} ${s["leave-mission-btn"]}`}
                        onClick={leaveMissionHandler}
                        data-id={m.mission_id}
                      >
                        Leave Mission
                      </button>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionsPage;
