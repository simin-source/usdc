import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    card, card_list, content_box, desc, left, menu, navbar, right, selector, title
} from './Content.module.scss';

import intoData from '@/assets/data/intoout/intoCards.json';
import intoData2 from '@/assets/data/intoout/intoCards_fan.json';
import outData from '@/assets/data/intoout/outCards.json';
import outData2 from '@/assets/data/intoout/outCards_fan.json';

export default defineComponent({
    name: 'Content',
    data() {
        return {
            s_left: '186px',
            current_index: 1,
            contentList: FooterState.isFan ? intoData2 : intoData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                if (this.current_index === 1) {
                    this.contentList = intoData2;
                } else {
                    this.contentList = outData2;
                }
            } else {
                if (this.current_index === 2) {
                    this.contentList = intoData;
                } else {
                    this.contentList = outData;
                }
            }
        });
    },
    render() {
        return <div class={`container ${content_box}`}>
            <div class="content flex-start">
                <div class={navbar}>
                    <div class={menu}>
                        <div style={{ color: `${this.current_index === 1 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 1;
                            this.contentList = [];
                            this.s_left = '186px';
                            if (FooterState.isFan) {
                                this.contentList = intoData2;
                            } else {
                                this.contentList = intoData;
                            }
                        }}>入金</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.contentList = [];
                            this.s_left = '780px';
                            if (FooterState.isFan) {
                                this.contentList = outData2;
                            } else {
                                this.contentList = outData;
                            }
                        }}>出金</div>
                    </div>
                    <div class={selector} style={{ left: `${this.s_left}` }}>
                        <div class={left}></div>
                        <div class={right}></div>
                    </div>
                </div>
                <div class={card_list}>
                    {this.contentList.map((item: any) => {
                        return <div class={card}>
                            <div class={title}>{item.title}</div>
                            <div class={desc}>{item.des}</div>
                            {!item.link.includes('fan') ? <a href={item.link} target="_blank">更多</a>
                                : <a href={item.link.replace('fan=', `fan=${FooterState.isFan}`)}>更多</a>}
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});