import { ptBR } from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";

const publishedDateFormatted = (date: Date) =>
{
    return format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale  : ptBR,
    })
}

const publishedDateRelativeToNow = (dateReativeToNow: Date) =>
{
    return formatDistanceToNow(dateReativeToNow, {
        locale   : ptBR,
        addSuffix: true,
    })
}

export { publishedDateFormatted, publishedDateRelativeToNow }