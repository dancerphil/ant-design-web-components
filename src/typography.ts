import {LitElement, html, css, customElement} from 'lit-element';

@customElement('awc-typography')
export class AwcTypography extends LitElement {
    static styles = css`
        :host {
            color: var(--text-color);
        }
    `;

    render() {
        return html`<slot></slot>`;
    }
}
