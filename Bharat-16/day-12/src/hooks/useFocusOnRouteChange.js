import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useFocusOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const heading = document.querySelector("h1");
    if (heading) {
      heading.setAttribute("tabIndex", "-1");
      heading.focus();
    }
  }, [location.pathname]);
}
