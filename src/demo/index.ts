import demo from './index.module.css';
import {html} from 'lit-html';
import {Demo} from './utils';

const Button = () => {
    const handleClick = () => console.log('Primary Button Clicked');
    return html`
        <awc-button
            type="primary"
            class=${demo.button}
            @click=${handleClick}
        >
            Primary
        </awc-button>
        <awc-button>Default</awc-button>
    `;
}

const Typography = () => {
    return html`
        <awc-typography>
            <awc-title>Introduction</awc-title>
            <awc-paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </awc-paragraph>
            <awc-paragraph>
                After massive project practice and summaries, Ant Design, a design language for background
                applications, is refined by Ant UED Team, which aims to 
                <awc-text strong>
                    uniform the user interface specs for internal background projects, lower the unnecessary
                    cost of design differences and implementation and liberate the resources of design and
                    front-end development
                </awc-text>.
            </awc-paragraph>
            <awc-title level=2>Guidelines and Resources</awc-title>
            <awc-paragraph>
                We supply a series of design principles, practical patterns and high quality design resources
                (<awc-text code>Sketch</awc-text> and <awc-text code>Axure</awc-text>), to help people create their product
                prototypes beautifully and efficiently.
            </awc-paragraph>
            <awc-paragraph>
                <ul>
                    <li>
                        <a href="https://ant.design/docs/spec/proximity">Principles</a>
                    </li>
                    <li>
                        <a href="https://ant.design//docs/pattern/navigation">Patterns</a>
                    </li>
                    <li>
                        <a href="https://ant.design//docs/resource/download">Resource Download</a>
                    </li>
                </ul>
            </awc-paragraph>
        </awc-typography>
    `;
}

const Grid = () => {
    return html`
        <style>
        awc-row {
            background-image: linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 4.16666667%,transparent 8.33333333%,#f5f5f5 8.33333333%,#f5f5f5 12.5%,transparent 12.5%,transparent 16.66666667%,#f5f5f5 16.66666667%,#f5f5f5 20.83333333%,transparent 20.83333333%,transparent 25%,#f5f5f5 25%,#f5f5f5 29.16666667%,transparent 29.16666667%,transparent 33.33333333%,#f5f5f5 33.33333333%,#f5f5f5 37.5%,transparent 37.5%,transparent 41.66666667%,#f5f5f5 41.66666667%,#f5f5f5 45.83333333%,transparent 45.83333333%,transparent 50%,#f5f5f5 50%,#f5f5f5 54.16666667%,transparent 54.16666667%,transparent 58.33333333%,#f5f5f5 58.33333333%,#f5f5f5 62.5%,transparent 62.5%,transparent 66.66666667%,#f5f5f5 66.66666667%,#f5f5f5 70.83333333%,transparent 70.83333333%,transparent 75%,#f5f5f5 75%,#f5f5f5 79.16666667%,transparent 79.16666667%,transparent 83.33333333%,#f5f5f5 83.33333333%,#f5f5f5 87.5%,transparent 87.5%,transparent 91.66666667%,#f5f5f5 91.66666667%,#f5f5f5 95.83333333%,transparent 95.83333333%);
            color: #999;
        }
        awc-col {
            text-align: center;
        }
        .highlight {
            background: rgba(0,146,255,.5);
            color: #fff;
        }
        </style>
        <awc-row>
            <awc-col class="highlight" span="24">col</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="6">col-6</awc-col>
            <awc-col span="6">col-6</awc-col>
            <awc-col class="highlight" span="6">col-6</awc-col>
            <awc-col span="6">col-6</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="8">col-8</awc-col>
            <awc-col span="8">col-8</awc-col>
            <awc-col class="highlight" span="8">col-8</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="12">col-12</awc-col>
            <awc-col span="12">col-12</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="16">col-16</awc-col>
            <awc-col span="8">col-8</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="8">col-8</awc-col>
            <awc-col class="highlight" span="8" offset="8">col-8-offset-8</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="6" offset="6">col-6-offset-6</awc-col>
            <awc-col class="highlight" span="6" offset="6">col-6-offset-6</awc-col>
        </awc-row>
        <awc-row>
            <awc-col class="highlight" span="12" offset="6">col-12-offset-6</awc-col>
        </awc-row>
    `;
}

const Affix = () => {
    return html`
        <awc-affix top="10">
            <awc-button type="primary">Affix top</awc-button>
        </awc-affix>
    `;
}

const Card = () => {
    return html`
        <awc-card title="Default size card" style="width:300px">
            <a slot="extra" href="#">More</a>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </awc-card>
    `;
}

const Page = () => {
    return html`
        <awc-typography>
            <awc-title>Ant Design Web Components</awc-title>
            <awc-paragraph>Ant Design Web Components.</awc-paragraph>
            <awc-divider></awc-divider>
            ${
            [{
                title: 'Example 示例',
                paragraph: 'A very naive example shows how to develop web components.',
                render: () => html`<awc-example></awc-example>`
            }, {
                title:'Button 按钮',
                paragraph: '按钮用于开始一个即时操作。',
                render: Button
            }, {
                title: 'Icon 图标',
                render: () =>  html``
            }, {
                title: 'Typography 排版',
                paragraph: '文本的基本格式。',
                render: Typography
            }, {
                title: 'Grid 栅格',
                paragraph: '24 栅格系统。',
                render: Grid
            }, {
                title: 'Layout 布局',
                render: () =>  html``
            }, {
                title: 'Space 间距',
                render: () =>  html``
            }, {
                title: 'Affix 固钉',
                paragraph: 'Not working yet... Some problem with shadow DOM...',
                render: Affix,
            }, {
                title: 'Breadcrumb 面包屑',
                render: () =>  html``
            }, {
                title: 'Card 卡片',
                paragraph: '通用卡片容器。',
                render: Card
            }].map(Demo)
            }
        </awc-typography>
    `;
}

export default Page;
