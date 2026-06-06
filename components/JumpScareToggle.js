import{j as a,m as s}from"../assets/proxy.js";import{u as r}from"../assets/JumpScareContext.js";import{c as t}from"../assets/createLucideIcon.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],l=t("eye-off",c);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],i=t("ghost",n),d=()=>{const{scaresEnabled:e,toggleScares:o}=r();return a.jsxs(s.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:o,className:"fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#1a1a1d] border border-[#4a1a5c] text-[#f5f5f5] shadow-lg hover:bg-[#4a1a5c] transition-colors group flex items-center gap-2 overflow-hidden","aria-label":e?"Disable jump scares":"Enable jump scares",title:e?"Scares: ON":"Scares: OFF",children:[e?a.jsx(i,{className:"w-5 h-5 text-[#ff7518] animate-float group-hover:text-[#f5f5f5]"}):a.jsx(l,{className:"w-5 h-5 text-gray-500 group-hover:text-[#f5f5f5]"}),a.jsx("span",{className:"max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-typewriter",children:e?"Disable Scares":"Enable Scares"})]})};export{d as J};
