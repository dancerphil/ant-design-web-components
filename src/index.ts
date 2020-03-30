import './example';
// @ts-ignore
import {html, render} from 'lit-html';

const Component1 = (data: any) => html`
<h1>${data.title}</h1>
<p>${data.body}</p>
<div><awc-example></awc-example></div>`
const root = Component1({title: 'Title', body: 'body'})
render(root, document.body)
