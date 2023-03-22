import { defineComponent } from 'vue';
import {
    banner_box, logo, slogan, desc, btn_group, white,purple
} from './Banner.module.scss';
import { ElButton } from 'element-plus';

export default defineComponent({
    name: 'Banner',
    render() {
        return <div class={`container ${banner_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${logo}`}>
                    <img src="./logo.webp" alt="usdc_icon" />
                    <div>USDCoin</div>
                </div>
                {/* <div class={slogan}>
                    一句话宣传语一句话宣传语
                </div> */}
                <div class={slogan}>一种更快、更安全、更高效的全球汇款、消费和兑换方式。使用USDC随时随地的进行支付和金融服务</div>
                <div class={btn_group}>
                    <ElButton type="primary" size="large" class={purple}>入金</ElButton>
                    <ElButton plain size="large" class={white}>玩法</ElButton>
                </div>
            </div>
        </div>;
    },
});