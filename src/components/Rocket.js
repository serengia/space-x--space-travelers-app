import React from "react";
import { useDispatch } from "react-redux";
import { rocketsActions } from "../redux/rockets/rocketsSlice";
import s from "./Rocket.module.scss";

function Rocket(props) {
  const { description, id, rocket_name, flickr_images, reserved } =
    props.rocketData;
  const imageURL = flickr_images?.[0];
  const dispatch = useDispatch();

  const reserveHandler = (e) => {
    const { id } = e.target.dataset;

    dispatch(rocketsActions.reserveRocket({ id }));
  };

  const cancelHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(rocketsActions.cancelRocketReservation({ id }));
  };

  return (
    <div className={s["rocket"]}>
      <div className={s["rocket-img-wrapper"]}>
        <img className={s["rocket-img"]} src={imageURL} alt={rocket_name} />
      </div>
      <div className={s["rocket-details"]}>
        <h3>{rocket_name}</h3>
        <p>
          {reserved && <span className={s["reserved-badge"]}>Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            className={s["reserve-btn"]}
            onClick={reserveHandler}
            data-id={id}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className={s["cancel-reservation-btn"]}
            data-id={id}
            onClick={cancelHandler}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

export default Rocket;
