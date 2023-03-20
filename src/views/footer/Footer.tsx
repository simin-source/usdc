import jump from 'jump.js';
import { defineComponent, Fragment } from 'vue';


import {
    copy, link, pc,
} from './Footer.module.scss';

enum PageType {
    INDEX = 'index',
    DESCRIPTION = 'description',
    SOLUTION = 'solution',
    CONTACT = 'contact',
    ABOUT = 'about',
}

export default defineComponent({
    name: 'Footer',
    props: {
        parent: {
            validator: (prop: string) => {
                return ['index'].includes(prop);
            },
            default: 'index',
            required: true,
        },
    },
    data() {
        return {
            isWcMinibox: false,
            phoneMiniBox: false,
            userName: '',
            userPhone: '',
            userEmail: '',
            userMessage: '',
            isRequiredMessage: false,
            requiredMessage: '',
        };
    },
    methods: {
        scrollTo(maoId: string) {
            const maoDom = document.getElementById(maoId);
            if (maoDom) {
                const pos = maoDom.offsetTop - 72; //当前视图的偏移量
                jump('body', {
                    duration: 1500,
                    offset: pos,
                });
            }
        },
    },
    render() {
        let urlChoice = './';
        if (this.parent === PageType.INDEX) {
            urlChoice = './';
        } else if (this.parent === PageType.DESCRIPTION || this.parent === PageType.SOLUTION || this.parent === PageType.CONTACT || this.parent === PageType.ABOUT) {
            urlChoice = '../';
        }
        return (
            <Fragment>
                <div style={{ width: '100%', height: '100%', background: '#042053' }}>
                    <div class={`container link_ ${link}`}>
                        <div class={`content flex-start ${pc}`}>
                            <div class="flex-between">
                                <dl>
                                    <dt>开发者</dt>
                                </dl>
                                <dl>
                                    <dt>公司名</dt>
                                </dl>
                                <dl>
                                    <dt>联系方式</dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={`container copy_ ${copy}`}>
                    <div class="content">
                        <div>xxxx.com版权所有</div>
                    </div>
                </div>
            </Fragment >
        );
    },
});