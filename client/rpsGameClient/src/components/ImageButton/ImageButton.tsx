import { MouseEventHandler } from "react";
import styles from "./ImageButton.module.css";

interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

function ImageButton({src, alt, onClick} : ImageButtonProps) {

    return (
        <button type="button" className={styles.button} onClick={onClick}>
            <img src={src} alt={alt} />
        </button>
    )

}

export default ImageButton;