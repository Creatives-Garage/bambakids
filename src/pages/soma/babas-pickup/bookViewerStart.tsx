import { babasPickUpForBookViewer } from "../../../shared/Data/booksData";
import BookViewer from "../../../features/Soma/BookViewer";

// TODO make index.tsx of the folder
const BabasPickUp = () => {
    return (
        <BookViewer bookData={babasPickUpForBookViewer} pageIndex={-1} />
    )
}

export default BabasPickUp;