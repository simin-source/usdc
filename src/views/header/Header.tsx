import jump from 'jump.js';
import { defineComponent } from 'vue';
import { FooterState } from '../footer/Footer';

import {
    active, header, logo,
} from './Header.module.scss';

enum PageType {
    INDEX = 'index',
    ADVANTAGE = 'advantage',
    INTOOUT = 'intoout',
    USE = 'use',
    INVESTMENT = 'investment',
}

export default defineComponent({
    name: 'Header',
    data() {
        return {
            opacity: 0,
        };
    },
    props: {
        parent: String,
    },
    mounted() {
        window.onload = () => {
            const searchValue = location.search; //从地址栏获取 #id值
            this.scrollTo(`${searchValue.slice(1)}`);
            this.opacity = this.handleFixed();
            window.onscroll = this.debounce(this.handleFixed);
        };
    },
    methods: {
        toModel(maoId: string, maoUrl: string) {
            if (location.pathname !== `/${maoUrl.split('/')[1]}/`) {
                location.href = maoUrl;
            }
            this.scrollTo(maoId);
        },
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
        handleFixed() {
            const scrollTopH = document.body.scrollTop || document.documentElement.scrollTop;
            // if (scrollTopH > 490 || (document.body.clientWidth < 769 && scrollTopH > 188)) {
            if (scrollTopH > 188) {
                return 0.7;
            } else {
                return 0;
            }
        },
        debounce(fn: any) {
            let timeout: any;
            return () => {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    fn.apply(this, arguments);
                    this.opacity = fn();
                }, 10);
            };
        },
    },
    render() {
        let urlChoice = './';
        if (this.parent === PageType.INDEX) {
            urlChoice = './';
        } else if (this.parent === PageType.ADVANTAGE || this.parent === PageType.INTOOUT || this.parent === PageType.USE || this.parent === PageType.INVESTMENT) {
            urlChoice = '../';
        }
        return <div id="header" class={`container ${header}`} style={{ background: `${this.parent === PageType.INDEX ? `rgba(45, 34, 64,${this.opacity})` : 'linear-gradient(90deg, #2D223E, #7F3099)'}` }}>
            <div class={'flex-between content'}>
                <div class={`flex-center ${logo}`}>
                    <a class="flex-start" href={this.parent === 'index' ? 'javascript: void(0);' : `${urlChoice}`}>
                        <img src={`${urlChoice}/logo.webp`} alt="usdc_logo" />
                        <div>USDC {FooterState.isFan ? '投資指南' : '投资指南'}</div>
                    </a>
                </div>
                <ul class="flex-center">
                    <li class={`${this.parent === PageType.ADVANTAGE ? active : ''}`}>
                        <a href={`${urlChoice}advantage/?fan=${FooterState.isFan}`}>{FooterState.isFan ? '優勢' : '优势'}</a>
                    </li>
                    <li class={`${this.parent === PageType.USE ? active : ''}`}>
                        <a href={`${urlChoice}use/?fan=${FooterState.isFan}`}>用途</a>
                    </li>
                    <li class={`${this.parent === PageType.INVESTMENT ? active : ''}`}>
                        <a href={`${urlChoice}investment/?fan=${FooterState.isFan}`}>{FooterState.isFan ? '投資' : '投资'}</a>
                    </li>
                    <li class={`${this.parent === PageType.INTOOUT ? active : ''}`}>
                        <a href={`${urlChoice}intoout/?fan=${FooterState.isFan}`}>入金&出金</a>
                    </li>
                </ul>
            </div>
        </div >;
    },
});