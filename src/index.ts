import {render} from 'lit-html';
import './root.css';
import './example';
import './button';
import './typography';
import './title';
import './paragraph';
import './divider';
import './grid';
import './affix';
import './card';
import Page from './demo';

const root = Page()
render(root, document.body)
