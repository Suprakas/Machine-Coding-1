import { useEffect } from "react";

export default function useClickOutside(currentRef, handleClose) {
  useEffect(() => {
    const cb = (e) => {
      if (!currentRef.current?.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", cb);

    return () => {
      document.removeEventListener("mousedown", cb);
    };
  }, [currentRef, handleClose]);
}
