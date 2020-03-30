import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('awc-row')
export class AwcRow extends LitElement {
    static styles = css`
        :host {
            display: flex;
        }
    `;

    render() {
        return html`<slot></slot>`
    }
}

@customElement('awc-col')
export class AwcCol extends LitElement {

    @property()
    span = '24'

    @property()
    offset = '0'

    static styles = css``;

    render() {
        if (this.span === '0') {
            return html``;
        }
        return html`
            <style>
            :host {
                flex: 0 0 calc(100% / 24 * ${this.span});
                margin-left: calc(100% / 24 * ${this.offset});
            }
            </style>
            <slot></slot>
        `;
    }
}
