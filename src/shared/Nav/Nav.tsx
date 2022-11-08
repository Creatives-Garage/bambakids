import React, {useState} from "react";
import Image from "next/image";
import styles from "./Nav.module.scss";
import Button from "../Button";

function Nav() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [searchForm, setSearchForm] = useState<boolean>(false);
  const [resultsModal, setResultsModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setSearchForm(!searchForm);
    alert(`Search Test value ${searchValue}!`)
  }

  console.log(searchForm);

  return (
    <div className={styles.navWrapper}>
        <div className={searchForm === false ? styles["navItems"] : styles["hiddenItem"]}>
          <div className={styles.navItemsLeft}>
            <Button text="Home" variant="normal">
              <Image src="/icons/home.svg" alt="home" width={32} height={32}/>            
            </Button>
            <Button text="About us" variant="normal">
              <Image src="/icons/information.svg" alt="information" width={32} height={32}/>
            </Button>
          </div>

          <div className={styles.navItemsCenter}>
            <Image alt="logo" src="/logo.png" width={80} height={80} />
          </div>

          <div className={styles.navItemsRight}>
            <Button text="Download" variant="normal">
              <Image src="/icons/download.svg" alt="information" width={32} height={32}/>
            </Button>
            <div onClick={() => setSearchForm(!searchForm)}>
              <Button text="Search" variant="search">
                <Image src="/icons/search.svg" alt="information" width={32} height={32}/>
              </Button>
            </div>
          </div>
        </div>

        <div className={searchForm === true ? styles["searchFormWrapper"] : styles["hiddenItem"]}>
          <form 
            className={styles.searchForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={styles.searchInput}
              value={searchValue}
              type="text"
              placeholder='Search Bamba Kids'
              onChange={(e)=> {setResultsModal(true); setSearchValue(e.target.value)}}
              onBlur={()=> {setResultsModal(false)}}
            />
            <Button text="Search" variant="search" type="submit">
              <Image src="/icons/search.svg" alt="information" width={32} height={32}/>
            </Button>          
          </form>
        
        { resultsModal &&
          <div className={styles.resultsModal}>          
          </div>
        }
        </div>
    </div>
  );
}

export default Nav;
