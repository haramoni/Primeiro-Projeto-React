import styles from "./Avatar.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Avatar(props: any) {
  return (
    <img
      className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
