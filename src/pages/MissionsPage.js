import React from "react";
import s from "./MissionsPage.module.scss";

function MissionsPage() {
  return (
    <div className={s["missions-page"]}>
      <table className={`${s["missions-container"]} row`}>
        <tr className={s["missions-header"]}>
          <th className={s["mission"]}>Mission</th>
          <th className={s["description"]}>Description</th>
          <th className={s["status"]}>Status</th>
        </tr>
        <tr className={s["mission-row"]}>
          <td>Telster</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ipsa harum delectus ratione molestiae modi aliquam id
            molestias consequatur, quod suscipit officiis amet, natus sunt rerum
            iure ea voluptas magnam?
          </td>
          <td>
            <div className={s["status"]}>
              <div className={s["status-badge"]}>
                <span
                  className={`${s["member-badge"]} ${s["inactive-member-badge"]}`}
                >
                  Not Member
                </span>
                <span
                  className={`${s["member-badge"]} ${s["active-member-badge"]}`}
                >
                  Active Member
                </span>
              </div>
              <div className={s["action-btns"]}>
                <button
                  type="button"
                  className={`${s["mission-btn"]} ${s["join-mission-btn"]} `}
                >
                  Join Mission
                </button>
                <button
                  type="button"
                  className={`${s["mission-btn"]} ${s["leave-mission-btn"]}`}
                >
                  Leave Mission
                </button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MissionsPage;
