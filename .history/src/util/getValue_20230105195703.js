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

export function time(fcstTime) {
  const time = `${fcstTime.substr(0, 2)}:${fcstTime.substr(2, 4)}`;
  return time;
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
          return <img src="../images/weather/rain-snow.png" alt="rain-snow" />;

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
            <img src="../images/weather/partlyMoon.png" alt="partlyMoon" />
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
            <img
              src="../images/weather/rain-snow-moon.png"
              alt="rain-snow-moon"
            />
          );
        case 3:
          return <img src="../images/weather/snow.png" alt="snow" />;
        case 4:
          return (
            <img src="../images/weather/showerMoon.png" alt="showerMoon" />
          );
      }
    }
  }
}

export function setType(middle, sub) {
  let type = [];
  if (!sub) {
    switch (middle) {
      case "paddedCoat":
      case "winter_hat":
      case "muffler":
      case "gloves":
        type.push(0);

      case "coat":
      case "sweater":
        type.push(1);

      case "trench_coat":
      case "black_tights":
      case "jacket":
      case "pants":
        type.push(2);

      case "cardigan":
      case "skin_tights":
      case "jacket":
      case "shirt":
      case "long_sleeve":
      case "pants":
        type.push(3);

      case "long_sleeve":
      case "shirt":
      case "hoodie":
      case "pants":
        type.push(4);

      case "blouse":
      case "long_sleeve":
      case "hoodie":
      case "pants":
        type.push(5);

      case "short_sleeve":
      case "short":
      case "pants":
        type.push(6);

      case "short":
      case "sleeveless":
      case "short_sleeve":
      case "thin_dress":
        type.push(7);
    }
  } else {
    if (middle === "jacket") {
      switch (sub) {
        case "leather":
          type = [1];
          break;
        case "thin":
          type = [4];
          break;
      }
    }
    if (middle === "sweater") {
      switch (sub) {
        case "thin":
          type = [4];
          break;
      }
    }
    if (middle === "long_sleeve") {
      switch (sub) {
        case "thin":
          type = [6];
          break;
      }
    }
    if (middle === "shirt") {
      switch (sub) {
        case "thin":
          type = [6];
          break;
        case "short":
          type = [6, 7];
          break;
      }
    }
    if (middle === "dress") {
      switch (sub) {
        case "thin":
          type = [7];
          break;
      }
    }
    if (middle === "cardigan") {
      switch (sub) {
        case "thin":
          type = [4, 5];
          break;
      }
    }
    if (middle === "pants") {
      switch (sub) {
        case "slacks":
          type = [4, 5];
          break;
        case "jeans":
          type = [1, 2, 3, 4, 5];
          break;
        case "fleece_lined":
          type = [0, 1, 3];
          break;
      }
    }
    if (middle === "hoodie") {
      switch (sub) {
        case "fleece_lined":
          type = [0, 1, 3];
          break;
      }
    }
  }
  return type;
}
