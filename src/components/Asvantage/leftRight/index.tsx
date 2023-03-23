import { defineComponent } from 'vue';
import { left, list, list_item, lr_box, right, text, title } from './index.module.scss';
const contentData = [{
    title: 'Why use Tether?',
    src: '/img/advangeimg/advantage_logo.png',
    text: '无论是与传统金融货币相比，还是和其他的数字稳定币相比，USDC都具有很大的优势。',
}];

export default defineComponent({
    name: 'AleftRight',
    render() {
        return <div class={`container ${lr_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${list}`}>
                    {contentData.map(item => {
                        return <div class={`flex-between ${list_item}`}>
                            <div class={left}>
                                {/* <h2 class={title}>{item.title}</h2> */}
                                <div class={text}>{item.text}</div>
                            </div>
                            <div class={right}>
                                <img src={item.src} alt="图片找不到" />
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});