import { babasPickUp, babasPickUpForBookViewer } from "../../../shared/Data/booksData";
import BookViewer from "../../../features/Soma/BookViewer";
import { useRouter } from "next/router";

const BabasPickUpPageNumber = () => {
    const router = useRouter();
    const { pageNumber } = router.query;
    const pageNumberAsNumber = Number(pageNumber);
    return (
        pageNumber && <BookViewer bookData={babasPickUpForBookViewer} initialPageNumber={pageNumberAsNumber} />
    )
}

export default BabasPickUpPageNumber;