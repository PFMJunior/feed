import { useState } from "react";
import { Avatar } from "../Avatar";
import { BiTrash } from "react-icons/bi";
import styles from "./styles.module.css";
import { TiThumbsUp } from "react-icons/ti";

interface CommentProps {
    content: string;
    onDeletedComment: (commentContent: string) => void;
}

export function Comment({ content, onDeletedComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () =>
    {
        onDeletedComment(content)
    }

    const handleLikeComment = () =>
    {
        setLikeCount((state) =>
        {
            return state + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/55879493?v=4"
            />

            <div className={styles.commentContent}>
                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Montefusco</strong>
                            <time
                                title="18 de Fevereiro às 16:00"
                                dateTime="2025-02-18 15:54"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            title="Deletar comentário"
                            onClick={handleDeleteComment}
                        >
                            <BiTrash />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <TiThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}