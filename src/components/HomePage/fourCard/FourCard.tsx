import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    card_box, section, card, title, btn
} from './FourCard.module.scss';

let contairData = [{
    title: 'Circle 账户',
    text: '通过认证的企业可以十分便捷地使用Circle账户进行USDC和法币之间的1:1兑换。',
}, {
    title: '中心化交易所',
    text: '中心化交易所是最常用的法币出入金平台，一般在全球多数国家都有汇款许可牌照，支持最多的法币和加密币种类，且费率最低。',
}, {
    title: '加密钱包',
    text: '有些加密钱包也支持USDC购买，例如Coinbase Wallet、Metamask等，可以直接用信用卡、银行转账等方式购买USDC。',
}];

let contairData2 = [{
    title: 'Circle 賬戶',
    text: '通過認證的企業可以十分便捷地使用Circle賬戶進行USDC和法幣之間的1:1兌換。',
}, {
    title: '中心化交易所',
    text: '中心化交易所是最常用的法幣出入金平臺，一般在全球多數國家都有匯款許可牌照，支持最多的法幣和加密幣種類，且費率最低。',
}, {
    title: '加密錢包',
    text: '有些加密錢包也支持USDC購買，例如Coinbase Wallet、Metamask等，可以直接用信用卡、銀行轉賬等方式購買USDC。',
}];

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
                            <img src='/img/index/favicon.ico' alt="icon找不到" />
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