import jump from 'jump.js';
import { defineComponent, reactive, Fragment } from 'vue';

import {
    copy, leftBox, link, pc
} from './Footer.module.scss';

enum PageType {
    INDEX = 'index',
    ADVANTAGE = 'advantage',
    INTOOUT = 'intoout',
    USE = 'use',
    INVESTMENT = 'investment',
}
export const FooterState = reactive({
    isFan: false as boolean,
});
const Data = [{ name: '开发者', fname: '開發者' }, { name: '公司名', fname: '公司名' }, { name: '联系方式', fname: '聯系方式' }, { name: '语言切换', fname: '語言切換' }];
const FooterData = [{ label: 'Mantax', flabel: 'Mantax' }, { label: '亚链有限公司', flabel: '亞鏈有限公司' }, { label: '邮箱', flabel: '郵箱' }, { label: '简体中文/繁体中文', flabel: '簡體中文/繁體中文' }];
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
        } else if (this.parent === PageType.ADVANTAGE || this.parent === PageType.INTOOUT || this.parent === PageType.INVESTMENT || this.parent === PageType.USE) {
            urlChoice = '../';
        }
        return (
            <Fragment>
                <div style={{ width: '100%', height: '100%', background: '#042053' }}>
                    <div class={`container link_ ${link}`}>
                        <div class={`content flex-start ${pc}`}>
                            <div class="flex-between" style={{ display: 'flex', flexDirection: 'column' }}>
                                {Data.map(e => {
                                    return <div class={leftBox}>
                                        <dt style={{ marginBottom: '10px' }}>{FooterState.isFan ? e.fname : e.name}</dt>
                                    </div>;
                                })}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {FooterData.map(e => {
                                    return <div class={leftBox}>
                                        <dt style={{ marginBottom: '10px', cursor: `${e.label === '简体中文/繁体中文' ? 'pointer' : 'default'}` }}
                                            onClick={() => {
                                                if (e.label === '简体中文/繁体中文') {
                                                    FooterState.isFan = !FooterState.isFan;
                                                }
                                            }}>{FooterState.isFan ? e.flabel : e.label}</dt>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class={`container copy_ ${copy}`}>
                    <div class="content">
                        <div>xxxx.com版权所有</div>
                    </div>
                </div> */}
            </Fragment >
        );
    },
});