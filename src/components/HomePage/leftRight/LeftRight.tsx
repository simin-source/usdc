import { defineComponent } from 'vue';
import {
    lr_box, list, list_item, title, left, right, text
} from './LeftRight.module.scss';

let contentData = [{
    title: 'Always on. Always open.',
    src: '../../../../../img/index/bank.webp',
    text: 'USDC transcends borders and banking hours. As a digital dollar with global reach, USDC can be available whenever and wherever you need it. It’s easy to send USDC around the world, pay for goods and services, or save for the future. Anyone with an internet connection can send, receive, and save USDC.'
}, {
    title: 'Instant cash flow. All day. Every day.',
    src: '../../../../../img/index/Developers.webp',
    text: 'No more waiting to finalize a transaction and withdraw cash. USDC makes the concept of settlement times obsolete with payments that can circle the globe and land in your account as fast as email. Imagine FX trades of any size that can take seconds to complete – that’s the power of USDC.'
}, {
    title: 'Dollars that make cents',
    src: '../../../../../img/index/Fiat.webp',
    text: 'It shouldn’t cost money to use money. Say goodbye to paying $50 to send a wire transfer – say hello to a fraction of a cent. Merchants can avoid incurring 2.9% fees on credit card payments, benefit from instant cash flow, and pass back savings to customers.'
}, {
    title: 'Finance reimagined',
    src: '../../../../../img/index/Fiat-to-digital.webp',
    text: 'USDC takes the abilities of cash to the next level. Unlock opportunities in crypto capital markets for trading, lending, borrowing, and fundraising with USDC – accessible globally. The possibilities are just beginning.'
}];


export default defineComponent({
    name: 'LeftRight',
    render() {
        return <div class={`container ${lr_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${list}`}>
                    {contentData.map(item => {
                        return <div class={`flex-between ${list_item}`}>
                            <div class={left}>
                                <h2 class={title}>{item.title}</h2>
                                <div class={text}>{item.text}</div>
                            </div>
                            <div class={right}>
                                <img src={item.src} alt="图片找不到" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>;
    },
});