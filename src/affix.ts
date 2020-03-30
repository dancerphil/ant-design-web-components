import {LitElement, html, css, customElement, property} from 'lit-element';

/**
 * position: sticky; not work
 * @see https://stackoverflow.com/questions/43707076/position-sticky-not-working-css-and-html
 * Also offsetTop is used as html attribute so we can't use it.
 */
@customElement('awc-affix')
export class AwcAffix extends LitElement {
    @property()
    top

    @property()
    bottom

    @property()
    left

    @property()
    right

    static styles = css``;

    render() {
        return html`
            <style>
            :host {
                position: sticky;
                ${this.top ? `top: ${this.top}px` : ''}
                ${this.bottom ? `bottom: ${this.bottom}px` : ''}
                ${this.left ? `left: ${this.left}px` : ''}
                ${this.right ? `right: ${this.right}px` : ''}
            }
            </style>
            <slot></slot>
        `;
    }
}
