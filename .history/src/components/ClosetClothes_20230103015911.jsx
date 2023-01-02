import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import ClosetList from "./ClosetList";
import Clothes from "./Clothes";
import ClothesDetailItem from "./ClothesDetailItem";

export default function ClosetClothes({ category }) {
  const { user, login } = useAuthContext();
  const [myClothes, setMyClothes] = useState([
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name: "하얀색 바지",
      image: "../images/basic-pants.png",
    },
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name: "검은색 바지",
      image: "../images/basic-pants.png",
    },
  ]);

  return (
    <div className=" bg-color2 rounded-3xl p-2">
      {!user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Button text={"로그인"} onClick={login} /> 후 내 옷장에 옷을 추가해
          보세요!
        </div>
      )}
      {!myClothes && user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Link
            to="/mycloset"
            className="text-lg text-color4 font-bold border-b-2 border-color4"
          >
            내 옷장
          </Link>{" "}
          에 옷을 추가해 보세요!
          <div>{category && category}</div>
        </div>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2">
        {user &&
          myClothes &&
          myClothes.map((item) => <ClosetList key={item.name} item={item} />)}
      </ul>
    </div>
  );
}
