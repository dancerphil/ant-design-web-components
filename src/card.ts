import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('awc-card')
export class AwcCard extends LitElement {
    @property()
    title = ''

    static styles = css`
        :host {
            display: block;
            border: 1px solid #eee;
            border-radius: 2px;
        }
        .head {
            display: flex;
            align-items: center;
            min-height: 48px;
            margin-bottom: -1px;
            padding: 0 24px;
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 16px;
            background: 0 0;
            border-bottom: 1px solid #f0f0f0;
            border-radius: 2px 2px 0 0;
        }
        .body {
            padding: 24px;
        }
        .title {
            flex: 1;
        }
    `;

    render() {
        if (this.title === '') {
            return html`
                <div class="body">
                    <slot></slot>
                </div>
            `;
        }
        return html`
            <div class="head">
                <div class="title">${this.title}</div>
                <slot name="extra"></slot>
            </div>
            <div class="body">
                <slot></slot>
            </div>
        `;
    }
}
