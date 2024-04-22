import{u as a,c as l,a as u,s as h,r as p,j as e,p as c,b as g,g as m}from"./index-BqfYjf1K.js";import{T as b}from"./TeachersCard-BYOz_0mn.js";const f=a.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,T=a.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${l.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,i=({setNamePopUp:o})=>{const r=u(h),[t,d]=p.useState(4),x=()=>{d(s=>s+4)},n=r.slice(0,t);return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:n.map(s=>e.jsx(b,{setNamePopUp:o,...s},s.id))}),t===n.length&&e.jsx(T,{type:"button",onClick:x,children:"Learn more"})]})};i.propTypes={setNamePopUp:c.func.isRequired};const j=a.div`
  position: relative;
  max-width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  }
`;function y({setNamePopUp:o}){const r=g();return p.useEffect(()=>{const t=new AbortController;return r(m({signal:t.signal})),()=>t.abort()},[r]),e.jsx(j,{children:e.jsx(i,{setNamePopUp:o})})}y.propTypes={setNamePopUp:c.func.isRequired};export{y as default};
