import { FooterState } from '@/views/footer/Footer';
import { defineComponent } from 'vue';
import { banner, left, right, text, top_box } from './index.module.scss';

export default defineComponent({
    name: 'AleftRight',
    render() {
        return <div class={`container ${top_box}`}>
            <div class="content flex-center">
                <div class={`flex-between ${banner}`}>
                    <div class={left}>
                        <div class={text}>{FooterState.isFan ? '無論是與傳統金融貨幣相比，還是和其他的數字穩定幣相比，USDC都具有很大的優勢。' : '无论是与传统金融货币相比，还是和其他的数字稳定币相比，USDC都具有很大的优势。'}</div>
                    </div>
                    <div class={right}>
                        <img src="../img/advantage/advantage_logo.png" alt="图片找不到" />
                    </div>
                </div>;
            </div>
        </div>;
    },
});