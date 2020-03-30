import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('awc-button')
export class AwcButton extends LitElement {

    @property()
    type = 'default';

    render() {
        const style = this.type === 'default' ? css`
        :host {
            color: var(--text-color);
            background-color: var(--white);
            border-color: var(--gray);
        }
        :host(:hover) {
            color: var(--link-color);
            background-color: var(--white);
            border-color: var(--link-color);
        }
        ` : css`
        :host {
            color: var(--white);
            background-color: var(--primary-color);
            border-color: var(--primary-color);
            text-shadow: var(--text-shadow);
            box-shadow: var(--box-shadow__primary);
        }
        :host(:hover) {
            color: var(--white);
            background-color: var(--link-color);
            border-color: var(--link-color);
        }
        `
        return html`
            <style>
            :host {
                line-height: 1.5715;
                position: relative;
                display: inline-block;
                font-weight: 400;
                white-space: nowrap;
                text-align: center;
                background-image: none;
                border: var(--border-transparent);
                box-shadow: var(--box-shadow);
                cursor: pointer;
                transition: var(--transition);
                user-select: none;
                touch-action: manipulation;
                height: 32px;
                padding: 4px 15px;
                font-size: 14px;
                border-radius: 2px;
                outline: 0;
            }
            ${style}
            </style>
            <slot></slot>
        `;
    }
}
