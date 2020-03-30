import {html, TemplateResult} from "lit-html";

const tip = 'Pending. Working in progress...'

interface Props {
    title: string;
    paragraph?: string;
    render: () => TemplateResult;
}
export const Demo = ({title, paragraph = tip, render}: Props) => {
    return html`
        <awc-title level=${2}>${title}</awc-title>
        <awc-paragraph>${paragraph}</awc-paragraph>
        <awc-card>
            ${render()}
        </awc-card>
        <awc-divider></awc-divider>
    `;
}
