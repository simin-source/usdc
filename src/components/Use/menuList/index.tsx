
import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import { card, left, left_right, menu, navbar, right, selector, use_box, use_list } from './index.module.scss';

import companyData from '@/assets/data/use/company.json';
import companyData2 from '@/assets/data/use/company_fan.json';
import individualData from '@/assets/data/use/individual.json';
import individualData2 from '@/assets/data/use/individual_fan.json';

export default defineComponent({
    name: 'MenuListUse',
    data() {
        return {
            s_left: '186px',
            current_index: 1,
            contentList: FooterState.isFan ? companyData2 : companyData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                if (this.current_index === 1) {
                    this.contentList = companyData2;
                } else {
                    this.contentList = individualData2;
                }
            } else {
                if (this.current_index === 2) {
                    this.contentList = companyData;
                } else {
                    this.contentList = individualData;
                }
            }
        });
    },
    render() {
        return <div class={`container ${use_box}`}>
            <div class={`content flex-center ${use_list}`} >
                <div class={navbar}>
                    <div class={menu}>
                        <div style={{ color: `${this.current_index === 1 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 1;
                            this.contentList = [];
                            this.s_left = '186px';
                            if (FooterState.isFan) {
                                this.contentList = companyData2;
                            } else {
                                this.contentList = companyData;
                            }
                        }}>{FooterState.isFan ? '企業' : '企业'}</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.contentList = [];
                            this.s_left = '780px';
                            if (FooterState.isFan) {
                                this.contentList = individualData2;
                            } else {
                                this.contentList = individualData;
                            }
                        }}>{FooterState.isFan ? '個人' : '个人'}</div>
                    </div>
                    <div class={selector} style={{ left: `${this.s_left}` }}>
                        <div class={left}></div>
                        <div class={right}></div>
                    </div>
                </div>
                <div class={`flex-between ${left_right}`}>
                    {this.contentList?.map((item: any) => {
                        return <div class={card}>
                            <h2>{item.title}</h2>
                            <p style={{ fontWeight: 'bold' }}>{item.des}</p>
                            {!item.link.includes('fan') ? <a href={item.link} target="_blank" >更多</a>
                                : <a href={item.link.replace('fan=', `fan=${FooterState.isFan}`)}>更多</a>}
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});