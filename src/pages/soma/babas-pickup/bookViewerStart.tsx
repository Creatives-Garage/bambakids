import { babasPickUp, babasPickUpForBookViewer } from "../../../shared/Data/booksData";
import BookViewer from "../../../features/Soma/BookViewer";
import { useRouter } from "next/router";

// TODO replace with index
const BabasPickUp = () => {
    return (
        <BookViewer bookData={babasPickUpForBookViewer} initialPageNumber={-1} />
    )
}

export default BabasPickUp;