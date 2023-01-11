import { useQuery } from "@tanstack/react-query";
import { getType } from "../util/getValue";

export default function usePublic(temperature) {
  const { isLoading, error, data } = useQuery(["public"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  console.log(temperature);
  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));
  return { clothesList };
}
