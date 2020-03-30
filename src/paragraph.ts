import {LitElement, html, css, customElement} from 'lit-element';

@customElement('awc-paragraph')
export class AwcParagraph extends LitElement {

    static styles = css`
        :host {
            display: block;
            margin-bottom: 1em;
            color: var(--text-color);
        }
    `;

    render() {
        return html`<slot></slot>`
    }
}
