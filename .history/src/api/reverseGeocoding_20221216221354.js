import axios from "axios";

export async function getRegion(latitude, longitude) {
  const res = await axios.get("/menu/getMenuList.do?type=2", {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": "2v5pgfdmjv",
      "X-NCP-APIGW-API-KEY": "ejA3eRSHvs5YD5qOlQ0MeyUfBuP8ONjCPwt5FWD0",
    },
    params: {
      coords: "126.969594,37.586541",
    },
  });
  console.log(res.json());
  return res;
}
