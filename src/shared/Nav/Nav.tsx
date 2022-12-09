// @ts-ignore
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Nav.module.scss";
import Button from "../Button";
import Fuse from "fuse.js";
import Link from "next/link";

function Nav({ payload }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchForm, setSearchForm] = useState<boolean>(false);
  const [resultsModal, setResultsModal] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>([]);
  const [focus, setFocus] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchForm(!searchForm);

    alert(`Search Test value ${searchValue}!`);
  };

  const options = {
    includeScore: true,
    keys: [
      {
        name: "videoName",
        weight: 0.9,
      },
    ],
  };
  const fuse = new Fuse(payload, options);

  function handleSearch(e: any) {
    setResultsModal(true);
    setSearchValue(e.target.value);
    const results = fuse.search(searchValue);
    setSearchResults(results);
    // console.log("Results: ", results);
  }

  const router = useRouter();

  return (
    <div className={styles.navWrapper}>
      <div
        className={
          searchForm === false ? styles["navItems"] : styles["hiddenItem"]
        }
      >
        <div className={styles.navItemsLeft}>
          <div className={styles.homeBtn}>
            <Button
              text="Home"
              variant="normal"
              icon
              action={() => router.push("/")}
            >
              <Image src="/icons/home.svg" alt="home" width={32} height={32} />
            </Button>
          </div>
          <div className={styles.aboutUsBtn}>
            <Button text="About us" variant="normal" icon>
              <Image
                src="/icons/information.svg"
                alt="information"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>

        <div className={styles.navItemsCenter}>
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={80} height={80} />
          </Link>
        </div>

        <div className={styles.navItemsRight}>
          <Button
            text="Download"
            variant="normal"
            icon
            action={() => router.push("/#download")}
          >
            <Image
              src="/icons/download.svg"
              alt="information"
              width={32}
              height={32}
            />
          </Button>
          <div onClick={() => setSearchForm(!searchForm)}>
            <Button text="Search" variant="search">
              <Image
                src="/icons/search.svg"
                alt="information"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={
          searchForm === true
            ? styles["searchFormWrapper"]
            : styles["hiddenItem"]
        }
      >
        <div className={styles.searchForm}>
          <input
            className={styles.searchInput}
            value={searchValue}
            type="text"
            placeholder="Search Bamba Kids"
            onChange={handleSearch}
            onBlur={() =>
              setTimeout(() => setResultsModal(!resultsModal), 2000)
            }
          />
          <div onClick={() => setSearchForm(false)}>
            <Button variant="search">
              <Image
                src="/icons/close.svg"
                alt="information"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>

        {resultsModal && (
          <div className={styles.resultsModal}>
            {searchResults.length > 0 ? (
              searchResults?.map((result: any, index: number) => (
                <div key={index}>
                  <Link href={`/tazama/${result?.item.videoId}`}>
                    <div className={styles.searchResult}>
                      <div>
                        <p>{result?.item.videoName}</p>
                        <span>Category: {result?.item.categoryName}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles.searchResult}>No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
