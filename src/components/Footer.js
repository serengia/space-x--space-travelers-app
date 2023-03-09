import React from "react";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={`${s["footer-container"]} row`}>
        <p className={s["by"]}>
          Build with 🧡 by{" "}
          <a
            href="https://github.com/serengia"
            target="_blank"
            rel="noreferrer"
          >
            @serengia
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
