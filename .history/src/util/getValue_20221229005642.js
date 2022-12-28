import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherShower,
} from "react-icons/ti";

import { FiMoon } from "react-icons/fi";
import { BsCloudMoonFill } from "react-icons/bs";

export function getType(temperature) {
  if (temperature <= 4) {
    return 0;
  } else if (temperature >= 5 && temperature <= 8) {
    return 1;
  } else if (temperature >= 9 && temperature <= 11) {
    return 2;
  } else if (temperature >= 12 && temperature <= 16) {
    return 3;
  } else if (temperature >= 17 && temperature <= 19) {
    return 4;
  } else if (temperature >= 20 && temperature <= 22) {
    return 5;
  } else if (temperature >= 23 && temperature <= 27) {
    return 6;
  } else if (temperature >= 28) {
    return 7;
  }
}

export function weatherIcon(TIME, SKY, PTY) {
  if (TIME > "0500" && TIME < "2000") {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <TiWeatherSunny />;

        case 3:
          return <TiWeatherPartlySunny />;

        case 4:
          return <TiWeatherCloudy />;
      }
    } else {
      switch (PTY) {
        case 1:
          return <TiWeatherDownpour />;
        case 2:
          return (
            <div className="flex items-center">
              <TiWeatherDownpour />/<TiWeatherSnow />
            </div>
          );
        case 3:
          return <TiWeatherSnow />;
        case 4:
          return <TiWeatherShower />;
      }
    }
  } else {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <FiMoon />;

        case 3:
          return <BsCloudMoonFill />;

        case 4:
          return <TiWeatherCloudy />;
      }
    } else {
      switch (PTY) {
        case 1:
          return <TiWeatherDownpour />;
        case 2:
          return (
            <div className="flex items-center">
              <TiWeatherDownpour />/<TiWeatherSnow />
            </div>
          );
        case 3:
          return <TiWeatherSnow />;
        case 4:
          return <TiWeatherShower />;
      }
    }
  }
}

export function weatherImg(TIME, SKY, PTY) {
  if (TIME > "0500" && TIME < "2000") {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <img src="../images/weather/sunny.png" alt="sunny" />;

        case 3:
          return (
            <img src="../images/weather/partlySunny.png" alt="partlySunny" />
          );

        case 4:
          return <img src="../images/weather/cloudy.png" alt="cloudy" />;
      }
    } else {
      switch (PTY) {
        case 1:
          return <img src="../images/weather/rainy.png" alt="rainy" />;
        case 2:
          return (
            <div className="flex items-center">
              <TiWeatherDownpour />/<TiWeatherSnow />
            </div>
          );
        case 3:
          return <img src="../images/weather/snow.png" alt="snow" />;
        case 4:
          return <img src="../images/weather/shower.png" alt="shower" />;
      }
    }
  } else {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <img src="../images/weather/moon.png" alt="moon" />;

        case 3:
          return (
            <img src="../images/weather/paratlyMoon.png" alt="partlyMoon" />
          );

        case 4:
          return (
            <img src="../images/weather/cloudyMoon.png" alt="cloudyMoon" />
          );
      }
    } else {
      switch (PTY) {
        case 1:
          return <img src="../images/weather/raniyMoon.png" alt="rainyMoon" />;
        case 2:
          return (
            <div className="flex items-center">
              <TiWeatherDownpour />/<TiWeatherSnow />
            </div>
          );
        case 3:
          return <img src="../images/weather/snowMoon.png" alt="snowMoon" />;
        case 4:
          return (
            <img src="../images/weather/showerMoon.png" alt="showerMoon" />
          );
      }
    }
  }
}
