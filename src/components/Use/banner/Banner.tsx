import { FooterState } from '@/views/footer/Footer';
import { defineComponent } from 'vue';
import { banner_box, left, right, text } from './Banner.module.scss';

export default defineComponent({
    name: 'Banner',
    render() {
        return <div class={`container ${banner_box}`}>
            <div class="content flex-between">
                <div class={left}>
                    <div class={text}>{FooterState.isFan ? '企業和個人都可以持有USDC來開展廣泛的金融、消費、慈善。' : '企业和个人都可以持有USDC来开展广泛的金融、消费、慈善。'}</div>
                </div>
                <div class={right}>
                    <img src="../img/advantage/advantage_logo.png" alt="图片找不到" />
                </div>
            </div>
        </div>;
    },
});