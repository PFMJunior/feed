import styles from "./styles.module.css";

interface AvatarProps {
    hasBorder?: boolean;
    avatar?  : string
}

export function Avatar({ hasBorder = true, avatar }: AvatarProps) {
    return(
        <img
            className={hasBorder ? styles.avatarWidthBorder : styles.avatar }
            src={avatar ? avatar : "https://avatars.githubusercontent.com/u/55879493?v=4"}
            alt=""
        />
    );
}