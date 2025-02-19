import styles from "./styles.module.css";
import { Avatar } from "../Avatar";
import { PiPencilLine } from "react-icons/pi";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />

            <div className={styles.profile}>
                <Avatar />
                <strong>Paulo Montefusco</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PiPencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}