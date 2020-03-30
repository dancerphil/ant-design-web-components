import {LitElement, html, customElement, property} from 'lit-element';

const fontSizeMap = {
    1: '38',
    2: '30',
    3: '24',
    4: '20',
}

const lineHeightMap = {
    1: '1.23',
    2: '1.35',
    3: '1.35',
    4: '1.4',
}

@customElement('awc-title')
export class AwcTitle extends LitElement {

    @property()
    level = '1';

    render() {
        return html`
            <style>
            :host {
                display: block;
                margin-bottom: .5em;
                color: rgba(0,0,0,.85);
                font-weight: 600;
                font-size: ${fontSizeMap[this.level] || fontSizeMap['1']}px;
                line-height: ${lineHeightMap[this.level] || lineHeightMap['1']};
            }
            </style>
            <slot></slot>
        `;
    }
}
