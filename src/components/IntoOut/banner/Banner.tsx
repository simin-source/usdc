import { defineComponent } from 'vue';
import {
    banner_box, left, right, text, title
} from './Banner.module.scss';

export default defineComponent({
    name: 'Banner',
    render() {
        return <div class={`container ${banner_box}`}>
            <div class="content flex-between">
                <div class={left}>
                    <h2 class={title}>Why use Tether?</h2>
                    <div class={text}>Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model and are the most widely traded. Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.</div>
                </div>
                <div class={right}>
                    <img src="../img/index/bank.webp" alt="图片找不到" />
                </div>
            </div>
        </div>;
    },
});