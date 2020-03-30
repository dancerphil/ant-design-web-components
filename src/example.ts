// @ts-ignore
import {LitElement, html, css, customElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('awc-example')
export class MyElement extends LitElement {

    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property()
    mood = 'great';

    static styles = css`
        span {
          color: var(--primary-color);
        }`;

    // Render element DOM by returning a `lit-html` template.
    render() {
        return html`Web Components are <span>${this.mood}</span>!`;
    }
}
