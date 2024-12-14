import style from "./avatar.module.css";
import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={style.avatar}>
      <li>
        <Image src={imageSrc} alt={`User: ${name}`} width={32} height={32} />
      </li>
      <li className={style.avatar__name}>@{name}</li>
    </ul>
  );
};
