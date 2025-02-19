import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { comments } from "../../mock";
import styles from "./styles.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { publishedDateFormatted, publishedDateRelativeToNow } from "../../hooks/formatedDate";

interface Author {
    name     : string;
    role     : string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author     : Author;
    content    : Content[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day     : '2-digit',
    //     month   : 'long',
    //     hour    : '2-digit',
    //     minute  : '2-digit',
    //     timeZone: 'America/Sao_Paulo'
    // }).format(publishedAt);
    const [handleComments, setHandleComments] = useState(comments);
    const [newCommentText, setNewCommentText] = useState('');
    
    const isNewCommentEmpty = newCommentText.length == 0

    const handleCreateNewComment = (event: FormEvent) =>
    {
        event.preventDefault();
        const newCommentTextObject = { content: newCommentText }
        setHandleComments([...handleComments, newCommentTextObject])
        setNewCommentText('')
    }

    const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    {
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('');
    }

    const deletedComment = (commentToDelete: string) =>
    {
        const commentsWithoutDeletedOne = handleComments.filter(comment => 
        {
            return comment.content != commentToDelete;
        })
        
        setHandleComments(commentsWithoutDeletedOne)
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) =>
    {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatar={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted(publishedAt)}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow(publishedAt)}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if(line.type === 'paragraph')
                    {
                        return <p key={index}>{line.content}</p>
                    } else if(line.type === 'link')
                    {
                        return <p key={index}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form
                className={styles.commentForm}
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    required
                    name="comment"
                    value={newCommentText}
                    onChange={handleCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {handleComments.map((comment, index) => (
                    <Comment
                        key={index}
                        content={comment.content}
                        onDeletedComment={deletedComment}
                    />
                ))}
            </div>
        </article>
    );
}