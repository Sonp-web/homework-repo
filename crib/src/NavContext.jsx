import React from "react";

import Components from "./Components";
import Lifecycle from "./Lifecycle";
import Props from "./Props";
import State from "./State";
import Events from "./Events";
import Key from "./Key";
import Refs from "./Refs";
import Async from "./Async";
import VirtualDom from "./VirtualDom";
import Fragment from "./Fragment";
import Memo from "./Memo";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseMemo from "./UseMemo";
import Router from "./Router";
import Forms from "./Forms";

export const navLinks = [
  { path: "/components", component: Components },
  { path: "/lifecycle", component: Lifecycle },
  { path: "/props", component: Props },
  { path: "/state", component: State },
  { path: "/events", component: Events },
  { path: "/key", component: Key },
  { path: "/refs", component: Refs },
  { path: "/async", component: Async },
  { path: "/virtualDom", component: VirtualDom },
  { path: "/fragment", component: Fragment },
  { path: "/memo", component: Memo },
  { path: "/useEffect", component: UseEffect },
  { path: "/useContext", component: UseContext },
  { path: "/useMemo", component: UseMemo },
  { path: "/router", component: Router },
  { path: "/forms", component: Forms },
];
