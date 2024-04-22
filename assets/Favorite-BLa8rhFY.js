import{u as t,a as r,d as o,j as e,p as a}from"./index-CNIB65Bm.js";import{T as x}from"./TeachersCard-BB-6PMFI.js";const d=t.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  }
`,n=({setNamePopUp:i})=>{const s=r(o);return e.jsx(d,{children:s.map(p=>e.jsx(x,{...p,setNamePopUp:i},p.id))})};n.propTypes={setNamePopUp:a.func.isRequired};const c=t.div`
  position: relative;
  max-width: 1440px;
  /* @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  } */
`,l=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`,u=t.h2`
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
  color: rgb(188, 199, 210);
`,f=()=>e.jsx(l,{children:e.jsx(u,{children:"No favorites"})});function h({setNamePopUp:i}){const s=r(o);return e.jsx(c,{children:s.length>0?e.jsx(n,{setNamePopUp:i}):e.jsx(f,{})})}h.propTypes={setNamePopUp:a.func.isRequired};export{h as default};
