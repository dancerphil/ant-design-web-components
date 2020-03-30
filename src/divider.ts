import {LitElement, html, css, customElement, property} from 'lit-element';

// TODO reimplement with host
@customElement('awc-divider')
export class AwcDivider extends LitElement {

    @property()
    type = 'horizontal';

    static styles = css`
        div {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0,0,0,.65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            list-style: none;
            -webkit-font-feature-settings: 'tnum';
            font-feature-settings: 'tnum';
            background: #f0f0f0;
        }
        .horizontal {
            display: block;
            clear: both;
            width: 100%;
            min-width: 100%;
            height: 1px;
            margin: 24px 0;
        }
        .vertical {
            position: relative;
            top: -.06em;
            display: inline-block;
            width: 1px;
            height: .9em;
            margin: 0 8px;
            vertical-align: middle;
        }
    `;

    render() {
        return html`<div class=${this.type}></div>`
    }
}
