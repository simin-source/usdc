import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    card_box, section, card, title, btn
} from './FourCard.module.scss';
import contairData from '@/assets/data/home/usdcCards.json';
import contairData2 from '@/assets/data/home/usdcCards_fan.json';

export default defineComponent({
    name: 'FourCard',
    data() {
        return {
            contentList: FooterState.isFan ? contairData2 : contairData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.contentList = contairData2;
            } else {
                this.contentList = contairData;
            }
        });
    },
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <h3 class={title}>{FooterState.isFan ? '如何獲取USDC？' : '如何获取USDC？'}</h3>
                <div class={`flex-between ${section}`}>
                    {this.contentList?.map((item: any) => {
                        return <div class={card}>
                            <img src='./img/index/favicon.ico' alt="icon找不到" />
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    })}
                </div>
                <div class={btn}>
                    <a href={`/intoout/?fan=${FooterState.isFan}`}>查看更多详细的入金/出金方法</a>
                </div>
            </div>
        </div>;
    },
});