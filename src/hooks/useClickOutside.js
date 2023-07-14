import React, { useEffect } from "react";

export default function useClickOutside(ref,setClose ) {

	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (!ref.current.contains(event.target)) {
			setClose(false)
		  }
		};
		document.addEventListener("mousedown", handleClickOutside);
	  }, [ref]);

  
}
