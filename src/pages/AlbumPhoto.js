import { useParams } from "react-router-dom"


export default function AlbumPhoto() {
    const { id } = useParams();
    return (
        <>
            這是單張照片{id}
        </>
    )
}