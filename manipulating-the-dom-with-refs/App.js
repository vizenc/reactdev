import { useRef } from "react";
import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";

export default function Page() {
  const searchRef = useRef(null);

  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            searchRef.current.focus();
          }}
        />
      </nav>
      <SearchInput ref={searchRef} />
    </>
  );
}
